import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
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

  @Input() product!: Product;
  visible = false;
  amount = 1;
  products:Product[] = []

  constructor(public usersService: UsersService, public productsService: ProductsService, private router: Router) {

  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(data => {this.products = deserializeArray(Product, <string>data.body)})
  }
  onIncrementAmount() {
    this.amount++;
  }

  onDecrementAmount() {
    //var locId = parseInt((<HTMLInputElement>document.getElementById("prd-id")).value);
    if(this.amount > 1) {
      this.amount--;
    }
  }
  onInputAmount(event: any) {
    this.amount = event.target.value;
  }
  goToBasket() {
    this.router.navigate(['/basket'])
  }

}
