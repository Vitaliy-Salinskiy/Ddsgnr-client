import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product-service.service';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

	constructor(private productService: ProductService) { }

	products: IProduct[] = [];
	@Input() title: string = 'Our Products';
	@Input() subtitle: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	@Input() isMain: boolean = true;
	categories = [
		{ name: "Top Sellers", isActive: true },
		{ name: "Popular Items", isActive: false },
		{ name: "Top Rated", isActive: false }
	];

	changeCategory(category: string) {
		this.categories.forEach((item) => {
			item.isActive = item.name === category;
		})
	}

	ngOnInit() {
		this.productService.getProducts().subscribe((products) => {
			this.products = products;
		})
	}

}
