import { Component } from '@angular/core';
import { footerFeatures } from 'src/app/constants';

@Component({
	selector: 'app-footer',
	templateUrl: './app-footer.component.html',
})
export class AppFooterComponent {
	footerItems = footerFeatures

	onSubmit(event: Event): void {
		event.preventDefault();
	}
}
