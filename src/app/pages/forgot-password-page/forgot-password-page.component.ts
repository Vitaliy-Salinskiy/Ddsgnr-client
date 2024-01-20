import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { getErrorMessage } from 'src/app/utils';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
	selector: 'app-forgot-password-page',
	templateUrl: './forgot-password-page.component.html',
})
export class ForgotPasswordPageComponent {

	form: FormGroup;
	error: string = '';
	getErrorMessage = getErrorMessage;

	constructor(private authService: AuthService, private router: Router) {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email])
		})
	}

	sendOtp(email: string) {
		this.error = ''
		if (this.form.valid) {
			this.authService.sendOtp(email).subscribe({
				next: (value: any) => {
					this.router.navigateByUrl("auth/otp")
					this.form.reset();
				},
				error: (err: any) => {
					this.error = err.error.message;
				}
			});
		} else {
			this.error = 'Please enter a valid credentials'
		}
	}

}
