import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
