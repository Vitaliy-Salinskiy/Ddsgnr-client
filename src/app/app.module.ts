import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ScaleDirective } from './directives/scale.directive';
import { SocialListComponent } from './components/social-list/social-list.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ButtonComponent } from './components/button/button.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { AboutComponent } from './components/about/about.component';
import { SalesComponent } from './components/sales/sales.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
	declarations: [
		AppComponent,
		TopHeaderComponent,
		AppHeaderComponent,
		AppFooterComponent,
		ScaleDirective,
		SocialListComponent,
		HeroComponent,
		HomePageComponent,
		AboutPageComponent,
		ProductsPageComponent,
		CartPageComponent,
		ServicePageComponent,
		ContactPageComponent,
		ProductDetailsPageComponent,
		ButtonComponent,
		CopyrightComponent,
		AboutComponent,
		SalesComponent,
		ServicesComponent,
		ProductsComponent,
		ProductCardComponent,
		ContactComponent,
		AuthPageComponent,
		RootPageComponent,
		LoginPageComponent,
		RegisterPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
