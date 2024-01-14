import { Component } from '@angular/core';
import { contactUs } from 'src/app/constants';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
})
export class ContactComponent {
	platforms = contactUs;
}
