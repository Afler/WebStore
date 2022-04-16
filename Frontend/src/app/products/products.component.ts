import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Params, Router} from "@angular/router";
import {ProductsService} from "../products.service";
import {UsersService} from "../users.service";
import {deserializeArray} from "class-transformer";
import {Product} from "../entity/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  visible = false;
  amount = 1;
  products:Product[] = []
  price:string = "price"
  superLocId:number = 0
  idL = 0;

  constructor(public usersService: UsersService, public productsService: ProductsService, private router: Router) {

  }

  ngOnInit() {

    this.productsService.getAllProducts().subscribe(data => {this.products = deserializeArray(Product, <string>data.body)
      let locId = parseInt((<HTMLInputElement>document.getElementById("hidden")).value);

      this.productsService.sendId(locId)
    })

  }
  onInputAmount(event: any) {
    this.amount = event.target.value;
  }
  goToBasket() {
    this.router.navigate(['/basket'])
  }
  // showProduct(){
  //   let id = this.productsService.getProduct(this.oneProduct.id).subscribe({
  //     next: (data) => console.log(data),
  //     error: (error) => console.log(error),
  //     complete: () => console.log('logout success')
  //   });
  //   return id;
  // }
  sendNewId(id:number){
    this.superLocId = id
  }
  getNewId(){
    return this.superLocId
  }
  addButton(id:number) {
    this.productsService.addProductToBasket(id, this.amount).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('logout success')
    });
    this.amount = 1
  }
  sortByPrice(price:string) {
    this.productsService.getProducts(price).subscribe(data => {this.products = deserializeArray(Product, <string>data.body)
    })
  }
  sortByName(name:string) {
    this.productsService.getProducts(name).subscribe(data => {this.products = deserializeArray(Product, <string>data.body)
    })
  }
  sortByQuantity(quantity:string) {
    this.productsService.getProducts(quantity).subscribe(data => {this.products = deserializeArray(Product, <string>data.body)
    })
  }
  showByCategory(category:string){
    this.productsService.getProductsByCategory(category).subscribe(data => {this.products = deserializeArray(Product, <string>data.body)
    })
  }
}
