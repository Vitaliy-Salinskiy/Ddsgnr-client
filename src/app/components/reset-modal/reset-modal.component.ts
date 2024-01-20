import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth-service.service';
import { getErrorMessage } from 'src/app/utils';

@Component({
	selector: 'reset-modal',
	templateUrl: './reset-modal.component.html',
})
export class ResetModalComponent {
	resetForm: FormGroup;
	error: string = "";
	getErrorMessage = getErrorMessage;
	isChanged: boolean = false

	constructor(private authService: AuthService) {
		this.resetForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
		});
	}

	onSubmit() {
		this.error = "";
		if (this.resetForm.valid) {
			this.authService.resetPassword({ ...this.resetForm.value }).subscribe({
				next: (data: any) => {
					this.isChanged = true
				},
				error: (err) => {
					this.error = err.error.message;
				},
			});
		}
	}

}
