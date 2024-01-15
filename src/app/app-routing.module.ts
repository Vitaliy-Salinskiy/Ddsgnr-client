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

const routes: Routes = [
	{
		path: "auth",
		component: AuthPageComponent,
		children: [
			{ path: "", redirectTo: "login", pathMatch: "full" },
			{ path: "login", component: LoginPageComponent },
			{ path: "register", component: RegisterPageComponent },
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
			{ path: "products/:id", component: ProductDetailsPageComponent },
			{ path: "services", component: ServicePageComponent },
			{ path: "contact", component: ContactPageComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
