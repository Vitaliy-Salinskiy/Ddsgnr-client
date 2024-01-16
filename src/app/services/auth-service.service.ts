import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IProfile, IToken, IUserDto } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private apiUrl: string = environment.apiUrl;

	constructor(private http: HttpClient) { }

	login(credentials: IUserDto): Observable<IToken> {
		return this.http.post<IToken>(`${this.apiUrl}/auth/login`, credentials, { withCredentials: true })
	}

	getProfile(): Observable<IProfile> {
		return this.http.get<IProfile>(`${this.apiUrl}/auth/profile`, { withCredentials: true })
	}

}
