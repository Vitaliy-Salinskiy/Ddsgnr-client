import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IProfile, IResetPasswordDto, IToken, IUserDto } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	userProfile = new BehaviorSubject<IProfile | null>(null);
	userProfile$ = this.userProfile.asObservable();

	private apiUrl: string = environment.apiUrl;

	constructor(private http: HttpClient) {
		this.getProfile().subscribe();
	}

	login(credentials: IUserDto): Observable<IToken> {
		return this.http.post<IToken>(`${this.apiUrl}/auth/login`, credentials, { withCredentials: true })
	}

	getProfile(): Observable<IProfile> {
		return this.http.get<IProfile>(`${this.apiUrl}/auth/profile`, { withCredentials: true })
			.pipe(
				tap((profile: IProfile) => {
					this.userProfile.next(profile);
				}),
				catchError((err) => {
					this.userProfile.next(null);
					return of(null);
				})
			);
	}

	sendOtp(email: string): Observable<any> {
		return this.http.post(`${this.apiUrl}/auth/otp`, { email }, { withCredentials: true });
	}

	verifyOtp(otp: string): Observable<any> {
		return this.http.post(`${this.apiUrl}/auth/validate-otp`, { otp }, { withCredentials: true });
	}

	resetPassword(resetPasswordDto: IResetPasswordDto): Observable<any> {
		return this.http.post(`${this.apiUrl}/auth/reset-password`, { ...resetPasswordDto }, { withCredentials: true });
	}

}