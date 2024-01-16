import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUser, IUserDto } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) { }

	createUser(credentials: IUserDto): Observable<IUser> {
		return this.http.post<IUser>(`${this.apiUrl}/users`, credentials)
	};

}
