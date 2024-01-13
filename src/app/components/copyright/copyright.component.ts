import { Component } from '@angular/core';
import { footerCopyrights } from '../../constants/index';

@Component({
	selector: 'copyright',
	templateUrl: './copyright.component.html',
})
export class CopyrightComponent {
	copyright = footerCopyrights;
}
