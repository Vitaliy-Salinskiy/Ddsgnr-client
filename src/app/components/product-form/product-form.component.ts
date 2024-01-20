import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AppDropzoneComponent } from '../app-dropzone/app-dropzone.component';
import { IColorOption, ISizeOption } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product-service.service';
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

	@ViewChild(AppDropzoneComponent) dropzone: AppDropzoneComponent;

	colorsOptions: IColorOption[] = [
		{ value: '#FFD700', viewValue: 'GOLD', color: '#FFD700' },
		{ value: '#228B22', viewValue: 'FOREST GREEN', color: '#228B22' },
		{ value: '#1E90FF', viewValue: 'DODGER BLUE', color: '#1E90FF' },
		{ value: '#483D8B', viewValue: 'DARK SLATE BLUE', color: '#483D8B' },
		{ value: '#B22222', viewValue: 'FIREBRICK', color: '#B22222' },
	];

	typeOptions = [
		{ value: "man", viewValue: "Male" },
		{ value: "woman", viewValue: "Female" },
		{ value: "kid", viewValue: "Kid" },
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
	selectedType = this.typeOptions[0].value;

	constructor(private productService: ProductService) {
		this.productForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
			brand: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.minLength(3), Validators.maxLength(255)]),
			price: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(99999), Validators.pattern(/^(0|[1-9]\d*)(\.\d{1,2})?$/)]),
			type: new FormControl(this.selectedType, [Validators.required]),
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
		if (this.productForm.valid) {
			const formData = new FormData();
			for (const key in this.productForm.value) {
				if (key !== 'images') {
					if (Array.isArray(this.productForm.value[key])) {
						formData.append(key, JSON.stringify(this.productForm.value[key]));
					} else {
						formData.append(key, this.productForm.value[key]);
					}
				}
			}
			for (const file of this.files) {
				formData.append('images', file, file.name);
			}

			this.productService.createProduct(formData).subscribe({
				next: (data) => {
					this.files = [];
					this.selectedColors = [];
					this.selectedSizes = [];
					this.selectedType = this.typeOptions[0].value;
					this.dropzone.clearFiles();
					this.productForm.reset();
				},
				error: (err) => {
					console.log(err);
				}
			})
		}
	}

	onTypeChange(value: typeof this.typeOptions[0]) {
		if (value?.value) {
			this.selectedType = value?.value;
			this.productForm.controls['type'].patchValue(this.selectedType);
		} else {
			this.selectedType = this.typeOptions[0].value;
			this.productForm.controls['type'].patchValue(this.selectedType);
		}
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