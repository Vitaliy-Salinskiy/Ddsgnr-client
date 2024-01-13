import { Component } from '@angular/core';
import { socials } from 'src/app/constants';

@Component({
	selector: 'top-header',
	templateUrl: './top-header.component.html',
})
export class TopHeaderComponent {
	socials = socials

}
