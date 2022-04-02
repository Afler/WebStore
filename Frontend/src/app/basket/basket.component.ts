import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Router} from "@angular/router";
import {Product} from "../entity/Product";
import {deserializeArray} from "class-transformer";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  empty: boolean = false;

  visible = false;
  amount = 1;
  basketProducts:Product[] = []

  constructor(public productsService: ProductsService, private router: Router) {

  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {this.basketProducts = deserializeArray(Product, <string>data.body)})
  }
  onIncrementAmount() {
    this.amount++;
  }
  onDecrementAmount() {
    if(this.amount > 1)
      this.amount--;
  }
  purchase() {

  }

}
