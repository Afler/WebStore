import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import { CabinetComponent } from './cabinet/cabinet.component';
import { HomeComponent } from './home/home.component';
import {ProductsService} from "./products.service";
import {AppRoutingModule} from "./app-routing.module";
import { UserComponent } from './user/user.component';
import { BasketComponent } from './basket/basket.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ProductsComponent,
    CabinetComponent,
    HomeComponent,
    UserComponent,
    BasketComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
