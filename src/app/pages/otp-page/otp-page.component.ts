import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth-service.service';

@Component({
	selector: 'app-otp-page',
	templateUrl: './otp-page.component.html',
})
export class OtpPageComponent implements OnDestroy {
	otpForm: FormGroup;
	error = '';
	showModal: boolean = false;
	private unsubscribe$ = new Subject<void>();

	constructor(private authService: AuthService, private router: Router) {
		this.otpForm = new FormGroup({
			otp: new FormControl('', [Validators.required, Validators.minLength(5),])
		});
	}

	onSubmit() {
		this.error = ''
		if (this.otpForm.valid) {
			this.authService.verifyOtp(this.otpForm.value.otp)
				.pipe(takeUntil(this.unsubscribe$))
				.subscribe({
					next: (data) => {
						this.showModal = true;
						this.otpForm.reset();
					},
					error: (err: any) => {
						console.log(err);
						this.error = err.error.message;
					}
				});
		} else {
			this.error = 'Please enter a valid credentials'
		}
	}

	onOtpChange(event: string) {
		this.otpForm.controls['otp'].patchValue(event)
	}

	ngOnDestroy() {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

}