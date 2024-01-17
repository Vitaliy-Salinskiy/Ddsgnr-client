import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProfile } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
	selector: 'top-header',
	templateUrl: './top-header.component.html',
})
export class TopHeaderComponent implements OnInit {

	userProfile: IProfile | null = null;
	private subscription: Subscription;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.subscription = this.authService.userProfile$.subscribe(
			profile => {
				this.userProfile = profile;
			}
		);
	}

	ngOnDestroy() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

}
