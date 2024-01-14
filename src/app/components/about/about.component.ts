import { Component } from '@angular/core';
import { aboutUs } from 'src/app/constants';

@Component({
	selector: 'about',
	templateUrl: './about.component.html',
})
export class AboutComponent {
	about = aboutUs;
}
