import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product, ProductsService} from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() product!: Product;

  constructor(public productsService: ProductsService, private router: Router) { }

  ngOnInit() {
  }
  goToBasket() {
    this.router.navigate(['/basket'])
  }

}
