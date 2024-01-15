import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-otp-page',
	templateUrl: './otp-page.component.html',
})
export class OtpPageComponent {
	otpForm: FormGroup;

	constructor() {
		this.otpForm = new FormGroup({
			otp: new FormControl('', [Validators.required, Validators.minLength(5)])
		});
	}

	onSubmit() {
		console.log(this.otpForm);
	}

	onOtpChange(event: string) {
		this.otpForm.controls['otp'].patchValue(event)
	}

}
