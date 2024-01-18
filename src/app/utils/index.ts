import { FormGroup } from "@angular/forms";

export const getErrorMessage = (form: FormGroup, controlName: string) => {
	let control = form.get(controlName);

	if (control?.errors?.['required']) {
		return 'This field is required';
	} else if (control?.errors?.['minlength']) {
		if (controlName !== 'colors' && controlName !== 'sizes') {
			return `Must be at least ${control.errors['minlength'].requiredLength} characters, you entered ${control.errors['minlength'].actualLength}`;
		}
		return `Must be at least ${control.errors['minlength'].requiredLength}, you provided with ${control.errors['minlength'].actualLength}`;
	} else if (control?.errors?.['maxLength']) {
		if (controlName !== 'colors' && controlName !== 'sizes') {
			return `Must be less than ${control.errors['maxLength'].requiredLength} characters, you entered ${control.errors['maxLength'].actualLength}`;
		}
		return `Must be less than ${control.errors['maxLength'].requiredLength}, you provided with ${control.errors['maxLength'].actualLength}`;
	} else if (control?.errors?.['email']) {
		return 'Not a valid email';
	} else if (control?.errors?.['pattern']) {
		if (controlName === 'price') {
			return 'Not a valid price format, try (0.99, 24, 412).';
		}
		return 'Not a valid pattern';
	} else if (control?.errors?.['min']) {
		return `Must be at least ${control.errors['min'].min}`;
	} else if (control?.errors?.['max']) {
		return `Must be less than ${control.errors['max'].max}`;
	}

	return null;
}