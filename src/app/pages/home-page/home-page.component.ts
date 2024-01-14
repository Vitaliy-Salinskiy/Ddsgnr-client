import { Component } from '@angular/core';
import { productsPages } from 'src/app/constants';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
})
export class HomePageComponent {
	pages = productsPages;
}
