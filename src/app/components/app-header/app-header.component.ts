import { Component } from '@angular/core';
import { headerFeatures, headerLinks } from 'src/app/constants';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
	isMenuOpen = false;
	links = headerLinks;
	features = headerFeatures;

}
