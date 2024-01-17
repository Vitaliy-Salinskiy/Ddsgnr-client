import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { AuthService } from './services/auth-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

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
