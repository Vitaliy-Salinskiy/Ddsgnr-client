import { Component } from '@angular/core';

import { serviceBenefits } from 'src/app/constants';

@Component({
	selector: 'services',
	templateUrl: './services.component.html',
})
export class ServicesComponent {
	services = serviceBenefits;
}
