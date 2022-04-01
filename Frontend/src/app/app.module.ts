import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AddFormComponent} from './add-form/add-form.component';
import {ProductsComponent} from './products/products.component';
import {FormsModule} from "@angular/forms";
import {CabinetComponent} from './cabinet/cabinet.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {UserComponent} from './user/user.component';
import {BasketComponent} from './basket/basket.component';
import {ProductComponent} from './product/product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductPageComponent} from './product-page/product-page.component';
import {RegistrationComponent} from './registration/registration.component';
import {MaterialModule} from "./material/material.module";
import { LoginComponent } from './login/login.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ProductsComponent,
    CabinetComponent,
    HomeComponent,
    UserComponent,
    BasketComponent,
    ProductComponent,
    AddProductComponent,
    ProductPageComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
