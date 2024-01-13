import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
})
export class ButtonComponent {
	@Input() clickFn?: () => void;
	@Input() text: string;
	@Input() type?: string;
	@Input() customClasses?: string;

}
