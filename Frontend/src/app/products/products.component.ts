import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product, ProductsService} from "../products.service";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product!: Product;
  visible = false;
  locAmount:Array<number> = [];
  amount = 1;

  constructor(public usersService: UsersService, public productsService: ProductsService, private router: Router) {
    this.locAmount.length = productsService.products.length
  }

  ngOnInit() {
    for(let i =0; i < this.locAmount.length; i++){
      this.locAmount[i] = 1;
    }
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
