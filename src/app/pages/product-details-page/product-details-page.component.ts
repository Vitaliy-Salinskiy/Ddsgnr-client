import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, Sizes } from 'src/app/interfaces';

import { ProductService } from 'src/app/services/product-service.service';
import { sortSizes } from 'src/app/utils';

@Component({
	selector: 'app-product-details-page',
	templateUrl: './product-details-page.component.html',
})
export class ProductDetailsPageComponent implements OnInit {
	product: IProduct;
	activeSize: string;
	count: number = 1;
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService) { }

	decreaseCount() {
		if (this.count > 1) {
			this.count--;
		}
	}

	increaseCount() {
		if (this.count < 99) {
			this.count++;
		}
	}

	onSizeChange(value: string) {
		this.activeSize = value;
	}

	ngOnInit(): void {
		const id = this.activatedRoute.snapshot.paramMap.get('id')
		if (id) {
			this.productService.getSingleProducts(id).subscribe({
				next: (data) => {
					this.product = data;
					sortSizes(this.product.sizes)
				},
				error: () => {
					this.router.navigateByUrl("/products")
				}
			})
		}
	}

}
