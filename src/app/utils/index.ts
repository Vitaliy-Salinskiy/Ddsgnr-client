import { FormGroup } from "@angular/forms";

export const getErrorMessage = (form: FormGroup, controlName: string) => {
	let control = form.get(controlName);

	if (control?.errors?.['required']) {
		return 'This field is required';
	} else if (control?.errors?.['minlength']) {
		return `Must be at least ${control.errors['minlength'].requiredLength} characters, you entered ${control.errors['minlength'].actualLength}`;
	} else if (control?.errors?.['maxLength']) {
		return `Must be less than ${control.errors['maxLength'].requiredLength} characters, you entered ${control.errors['maxLength'].actualLength}`;
	} else if (control?.errors?.['email']) {
		return 'Not a valid email';
	}

	return null;
}