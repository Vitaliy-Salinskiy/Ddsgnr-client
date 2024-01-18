import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IColorOption, ISizeOption } from 'src/app/interfaces';
import { getErrorMessage } from 'src/app/utils';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
	productForm: FormGroup;
	files: File[] = [];
	imagesError: string = '';
	getErrorMessage = getErrorMessage;

	colorsOptions: IColorOption[] = [
		{ value: '#FFD700', viewValue: 'GOLD', color: '#FFD700' },
		{ value: '#228B22', viewValue: 'FOREST GREEN', color: '#228B22' },
		{ value: '#1E90FF', viewValue: 'DODGER BLUE', color: '#1E90FF' },
		{ value: '#483D8B', viewValue: 'DARK SLATE BLUE', color: '#483D8B' },
		{ value: '#B22222', viewValue: 'FIREBRICK', color: '#B22222' },
	];

	sizeOptions: ISizeOption[] = [
		{ value: 'XS', viewValue: 'Extra Small' },
		{ value: 'S', viewValue: 'Small' },
		{ value: 'M', viewValue: 'Medium' },
		{ value: 'L', viewValue: 'Large' },
		{ value: 'XL', viewValue: 'Extra Large' },
		{ value: 'XXL', viewValue: 'Double Extra Large' },
	];

	selectedColors = [];
	selectedSizes = [];

	constructor() {
		this.productForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
			description: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
			price: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(99999), Validators.pattern(/^(0|[1-9]\d*)(\.\d{1,2})?$/)]),
			colors: new FormControl(this.selectedColors, [Validators.required, Validators.minLength(1)]),
			sizes: new FormControl(this.selectedSizes, [Validators.required, Validators.minLength(1)]),
			images: new FormControl(this.files, [Validators.required, Validators.minLength(1)]),
		})
	}

	onSubmit() {
		if (this.files.length === 0) {
			this.imagesError = 'Please select at least one image.';
			return;
		}
		console.log(this.productForm.value);
	}

	onFilesChanged(files: File[]) {
		this.imagesError = '';
		this.files = files;
		this.productForm.patchValue({ images: this.files });
	}

	onColorChanged(color: IColorOption[]) {
		this.selectedColors.push(color);
		this.productForm.patchValue({ color: this.selectedColors });
	}

	onSizeChanged(color: IColorOption[]) {
		this.selectedSizes.push(color);
		this.productForm.patchValue({ color: this.selectedSizes });
	}

}