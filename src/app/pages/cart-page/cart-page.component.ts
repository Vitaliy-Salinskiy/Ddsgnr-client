import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { paymentMethods } from '../../constants';
import { getErrorMessage } from 'src/app/utils';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from 'src/app/interfaces';
@Component({
	selector: 'app-cart-page',
	templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements IDeactivateComponent, OnInit {
	cartForm: FormGroup;
	getErrorMessage = getErrorMessage;
	paymentMethods = paymentMethods;
	countries = [
		{ name: 'United States' },
		{ name: 'United Kingdom' },
		{ name: 'Canada' },
		{ name: 'Ukraine' },
		{ name: 'Poland' },
		{ name: 'German' },
	];
	selectedCountry: string = this.countries[0].name;
	formSubmitted: boolean = false;

	constructor() {
		this.cartForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
			'mv/yy': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$|^.{5,10}$')]),
			cvc: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]{3}$')]),
			name: new FormControl('', [Validators.required]),
			country: new FormControl(this.selectedCountry, [Validators.required]),
			zip: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]{5}(-[0-9]{4})?$|^[0-9]{2}-?[0-9]{3}$')]),
		})
	}

	onSubmit() {
		if (this.cartForm.valid) {
			console.log(this.cartForm.value);
			this.formSubmitted = true;
			this.cartForm.reset()
		}
	}

	onCountryChange(event: { name: string } | any) {
		if (event?.name) {
			this.selectedCountry = event.name;
			this.cartForm.controls['country'].patchValue(this.selectedCountry);
		} else {
			this.selectedCountry = this.countries[0].name;
			this.cartForm.controls['country'].patchValue(this.selectedCountry);
		}
	}

	canExit: () => boolean | Promise<boolean> | Observable<boolean> = () => {
		return this.cartForm && !this.formSubmitted && this.cartForm.dirty ? confirm("Are you sure you want to leave?") : true;
	}

	ngOnInit(): void {
		this.formSubmitted = false;
	}

}
