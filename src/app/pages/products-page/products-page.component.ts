import { Component } from '@angular/core';
import { productsPages } from 'src/app/constants';

@Component({
	selector: 'app-products-page',
	templateUrl: './products-page.component.html',
})
export class ProductsPageComponent {
	pages = productsPages;
}
