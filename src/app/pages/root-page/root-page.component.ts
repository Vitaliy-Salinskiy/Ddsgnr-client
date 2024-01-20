import { Component, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
	selector: 'app-root-page',
	templateUrl: './root-page.component.html',
})
export class RootPageComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
		this.authService.getProfile().subscribe();

		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe(() => {
			this.authService.getProfile().subscribe({
				error: (err) => {

				}
			});
		})
	}
}
