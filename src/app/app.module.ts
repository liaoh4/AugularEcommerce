import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {ErrorPageComponent} from "./error-page/error-page.component";
import { SpinnerComponent } from './product/shared/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    ErrorPageComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    CartModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
