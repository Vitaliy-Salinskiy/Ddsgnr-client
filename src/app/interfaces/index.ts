import { Observable } from "rxjs";

export interface IProduct {
	name: string;
	brand: string;
	price: number;
	type: string;
	description?: string;
	images: string[];
	colors: string[];
	sizes: string[];
	__v: number;
	_id: string;
}

export interface IUser {
	_id: string;
	username: string;
	password: string;
	email: string;
	image?: string;
	cart: IProduct[];
	createAt: Date;
	_v: number
}

export interface IUserDto {
	username: string;
	email: string;
	password: string;
	image?: string;
}

export interface IProfile {
	userId: string;
	username: string;
	email: string;
	image: string | null;
}

export interface IToken {
	access_token: string;
}

export interface IDeactivateComponent {
	canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}

export interface IColorOption {
	value: string;
	viewValue: string;
	color: string;
}

export interface ISizeOption {
	value: string;
	viewValue: string;
}

export interface IResetPasswordDto {
	email: string;
	password: string;
}

export enum ProductType {
	man = "man",
	woman = "woman",
	kid = "kid"
}

export enum Sizes {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
	XXL = 'XXL'
}

export interface CreateProductDto {
	readonly name: string;
	readonly brand: string;
	readonly price: number;
	readonly colors: string;
	readonly sizes: Sizes;
	readonly type: ProductType;
	readonly description?: string;
	images: string[];
}
