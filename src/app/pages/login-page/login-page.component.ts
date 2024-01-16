import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getErrorMessage } from '../../utils';
import { AuthService } from 'src/app/services/auth-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IToken } from 'src/app/interfaces';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

	loginForm: FormGroup;
	error: string;
	getErrorMessage = getErrorMessage;

	constructor(private authService: AuthService, private router: Router) {
		this.loginForm = new FormGroup({
			username: new FormControl("", [Validators.required, Validators.minLength(1)]),
			password: new FormControl("", [Validators.required, Validators.minLength(6)])
		})
	}

	login(): void {
		this.error = null;

		if (this.loginForm.untouched) {
			this.error = "Please fill out the form";
			return;
		}

		if (this.loginForm.valid) {
			this.authService.login(this.loginForm.value).subscribe({
				next: (user: IToken) => {
					this.router.navigateByUrl("/");
				},
				error: (error: HttpErrorResponse) => {
					if (error.error.message) {
						this.error = "Check your username and password";
					}
				}
			});
		} else {
			console.log("Invalid", this.loginForm.value);
		}
	}

}
