import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgSelectModule } from '@ng-select/ng-select';
import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { ServicesComponent } from './components/services/services.component'
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
import { ProductsComponent } from './components/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDropzoneComponent } from './components/app-dropzone/app-dropzone.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ResetModalComponent } from './components/reset-modal/reset-modal.component';

register();

@NgModule({
	declarations: [
		AppComponent,
		TopHeaderComponent,
		AppHeaderComponent,
		AppFooterComponent,
		ScaleDirective,
		ServicesComponent,
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
		ProductsComponent,
		ProductCardComponent,
		ContactComponent,
		AuthPageComponent,
		RootPageComponent,
		LoginPageComponent,
		RegisterPageComponent,
		ForgotPasswordPageComponent,
		OtpPageComponent,
		ProductFormComponent,
		AppDropzoneComponent,
		CartItemComponent,
		ResetModalComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		NgOtpInputModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		NgxDropzoneModule,
		NgSelectModule
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
