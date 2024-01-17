import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { headerFeatures, headerLinks } from 'src/app/constants';
import { IProfile } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
})
export class AppHeaderComponent implements OnInit, OnDestroy {
	isMenuOpen = false;
	links = headerLinks;
	userProfile: IProfile | null = null;
	features = headerFeatures;

	private subscription: Subscription;

	constructor(private authService: AuthService) { }

	changePage(): void {
		this.isMenuOpen = false;
	}

	ngOnInit(): void {
		this.subscription = this.authService.userProfile$.subscribe(
			profile => {
				this.userProfile = profile;
			}
		)
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}

}
