import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private url = 'http://localhost:5000';

	constructor(private http: HttpClient) { }

	getProducts(): Observable<any> {
		const data = this.http.get<IProduct[]>(`${this.url}/products`);
		return data;
	}

}