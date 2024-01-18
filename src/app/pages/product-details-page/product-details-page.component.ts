import { Component } from '@angular/core';

@Component({
	selector: 'app-product-details-page',
	templateUrl: './product-details-page.component.html',
})
export class ProductDetailsPageComponent {
	colors: string[] = ['#FFD700', '#228B22', '#1E90FF', '#483D8B', '#B22222'];
	sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
	activeSize: string = 'XS'
	count: number = 1;

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
}
