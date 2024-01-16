import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IProfile, IUser, IUserDto } from '../interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthServiceService {

	private apiUrl: string = environment.apiUrl;

	constructor(private http: HttpClient) { }

	login(credentials: IUserDto): Observable<IUser> {
		return this.http.post<IUser>(`${this.apiUrl}/auth/login`, credentials)
			.pipe(
				catchError((err) => {
					console.error('An error occurred:', err);
					return of(null);
				})
			);
	}

	getProfile(): Observable<IProfile> {
		return this.http.get<IProfile>(`${this.apiUrl}/auth/profile`, { withCredentials: true }).pipe(
			catchError((err) => {
				console.error('An error occurred:', err);
				return of(null);
			})
		);
	}

}
