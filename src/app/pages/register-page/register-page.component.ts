import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IUser, IUserDto } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user-service.service';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

	registerForm: FormGroup;
	error: string = null;
	isLoading: boolean = false;

	constructor(private userService: UserService, private router: Router) {
		this.registerForm = new FormGroup({
			email: new FormControl("", [Validators.required, Validators.email]),
			username: new FormControl("", [Validators.required, Validators.minLength(1)]),
			password: new FormControl("", [Validators.required, Validators.minLength(6)]),
			confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
			isAgree: new FormControl(false, [Validators.requiredTrue])
		});
	}

	getErrorMessage(controlName: string) {
		let control = this.registerForm.get(controlName);

		if (control?.errors?.['required']) {
			return 'This field is required';
		} else if (control?.errors?.['minlength']) {
			return `Must be at least ${control.errors['minlength'].requiredLength} characters, you entered ${control.errors['minlength'].actualLength}`;
		} else if (control?.errors?.['email']) {
			return 'Not a valid email';
		}

		return null;
	}

	register(): void {
		this.error = null;
		this.isLoading = true;

		if (this.registerForm.untouched) {
			this.error = "Please fill out the form";
			this.isLoading = false;
			return;
		}

		if (this.registerForm.value.isAgree === false) {
			this.error = "You must agree to the terms and conditions";
			this.isLoading = false;
			return;
		}

		if (this.registerForm.valid) {
			if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
				this.error = "Password and Confirm Password must be the same";
				this.isLoading = false;
				return;
			}

			const credentials: IUserDto = {
				email: this.registerForm.value.email,
				username: this.registerForm.value.username,
				password: this.registerForm.value.password
			};

			this.userService.createUser(credentials).subscribe(
				(user: IUser) => {
					this.registerForm.reset();
					this.isLoading = false;
					this.router.navigateByUrl("/auth/login")
				},
				(error: HttpErrorResponse) => {
					if (error.error.message.startsWith("E11000 duplicate key error collection: ddsgnr.users index: email_1 dup key:")) {
						this.error = `Email: ${this.registerForm.value.email} already exists`;
					} else {
						this.error = error.error.message;
						console.log('An error occurred:', error.error.message);
					}
					this.isLoading = false;
				}
			);
		}
	}
}
