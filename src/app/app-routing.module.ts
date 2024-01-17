import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

import { canActivate, canDeactivate } from './guards/auth.guard';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
	{
		path: "auth",
		component: AuthPageComponent,
		children: [
			{ path: "", redirectTo: "login", pathMatch: "full" },
			{ path: "login", component: LoginPageComponent, canDeactivate: [canDeactivate] },
			{ path: "register", component: RegisterPageComponent, canDeactivate: [canDeactivate] },
			{ path: "forgot-password", component: ForgotPasswordPageComponent },
			{ path: "otp", component: OtpPageComponent },
		]
	},
	{
		path: "",
		component: RootPageComponent,
		children: [
			{ path: "", redirectTo: "home", pathMatch: "full" },
			{ path: "home", component: HomePageComponent },
			{ path: "about", component: AboutPageComponent },
			{ path: "products", component: ProductsPageComponent },
			{ path: "products/create", component: ProductFormComponent },
			{ path: "products/:id", component: ProductDetailsPageComponent },
			{ path: "services", component: ServicePageComponent },
			{ path: "contact", component: ContactPageComponent, canActivate: [canActivate] },
			{ path: "cart/:id", component: CartPageComponent, canActivate: [canActivate] },
		],
	},
	{ path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
