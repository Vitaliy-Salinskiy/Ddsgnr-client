import { Component } from '@angular/core';
import { socials } from 'src/app/constants';

@Component({
	selector: 'social-list',
	templateUrl: './social-list.component.html',
})
export class SocialListComponent {
	socials = socials
}
