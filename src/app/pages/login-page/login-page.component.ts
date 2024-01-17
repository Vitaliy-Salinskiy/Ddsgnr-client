import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { getErrorMessage } from '../../utils';
import { AuthService } from 'src/app/services/auth-service.service';
import { IDeactivateComponent, IToken } from 'src/app/interfaces';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements IDeactivateComponent, OnInit {

	loginForm: FormGroup;
	error: string;
	formSubmitted: boolean = false;
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
					this.formSubmitted = true;
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

	canExit: () => boolean | Promise<boolean> | Observable<boolean> = () => {
		return this.loginForm && !this.formSubmitted && this.loginForm.dirty ? confirm("Are you sure you want to leave?") : true;
	}

	ngOnInit(): void {
		this.formSubmitted = false;
	}

}