import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {CabinetComponent} from "./cabinet/cabinet.component";
import {BasketComponent} from "./basket/basket.component";
import {ProductComponent} from "./product/product.component";
import {AddFormComponent} from "./add-form/add-form.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {ProductPageComponent} from "./product-page/product-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'cabinet', component: CabinetComponent},
  {path: 'prod/:id', component: ProductComponent},
  {path: 'products/:id', component: ProductPageComponent},
  {path: 'addForm', component: AddFormComponent},
  {path: 'addProduct', component: AddProductComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
