import { Component, Input, OnChanges } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
	selector: 'product-card',
	templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnChanges {
	@Input() product: IProduct;

	ngOnChanges() {
		console.log(`http://localhost:5000/` + this.product.image);
	}

}
