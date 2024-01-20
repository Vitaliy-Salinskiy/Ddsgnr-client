import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateProductDto, IProduct } from '../interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private url = environment.apiUrl;

	constructor(private http: HttpClient) { }

	getProducts(): Observable<IProduct[]> {
		const data = this.http.get<IProduct[]>(`${this.url}/products`);
		return data;
	}

	getSingleProducts(id: string): Observable<IProduct> {
		return this.http.get<IProduct>(`${this.url}/products/${id}`);
	}

	createProduct(productDto: FormData): Observable<IProduct> {
		return this.http.post<IProduct>(`${this.url}/products`, productDto, { withCredentials: true });
	}

}