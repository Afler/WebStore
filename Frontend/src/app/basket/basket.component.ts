import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  empty: boolean = this.productsService.products.length === 0;

  visible = false;
  amount = 1;

  constructor(public productsService: ProductsService, private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.empty)
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
