import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IUser, IUserDto } from 'src/app/interfaces';
import { getErrorMessage } from '../../utils';
import { UserService } from 'src/app/services/user-service.service';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

	registerForm: FormGroup;
	error: string = null;
	getErrorMessage = getErrorMessage;

	constructor(private userService: UserService, private router: Router) {
		this.registerForm = new FormGroup({
			email: new FormControl("", [Validators.required, Validators.email]),
			username: new FormControl("", [Validators.required, Validators.minLength(1)]),
			password: new FormControl("", [Validators.required, Validators.minLength(6)]),
			confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
			isAgree: new FormControl(false, [Validators.requiredTrue])
		});
	}

	register(): void {
		this.error = null;

		if (this.registerForm.untouched) {
			this.error = "Please fill out the form";
			return;
		}

		if (this.registerForm.value.isAgree === false) {
			this.error = "You must agree to the terms and conditions";
			return;
		}

		if (this.registerForm.valid) {
			if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
				this.error = "Password and Confirm Password must be the same";
				return;
			}

			const credentials: IUserDto = {
				email: this.registerForm.value.email,
				username: this.registerForm.value.username,
				password: this.registerForm.value.password
			};

			this.userService.createUser(credentials).subscribe({
				next: (user: IUser) => {
					this.registerForm.reset();
					this.router.navigateByUrl("/auth/login");
				},
				error: (error: HttpErrorResponse) => {
					if (error.error.message.startsWith("E11000 duplicate key error collection: ddsgnr.users index: email_1 dup key:")) {
						this.error = `Email: ${this.registerForm.value.email} already exists`;
					} else {
						this.error = error.error.message;
						console.log('An error occurred:', error.error.message);
					}
				}
			});

		}
	}

}
