import { Observable } from "rxjs";

export interface IProduct {
	brand: string;
	image: string;
	name: string;
	price: number;
	type: string;
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