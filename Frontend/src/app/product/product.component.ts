import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Product, ProductsService} from "../products.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product!: Product
  name = ''
  description = ''
  price = ''
  image = ''

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    // @ts-ignore
      this.product = this.productsService.getById(params.id)
    })
  }

  updateProduct() {
    if (this.name.trim() && this.description.trim() && this.price.trim() && this.image.trim()) {
        this.product.image = this.image
        this.product.name = this.name
        this.product.description = this.description
        this.product.price = this.price
      }
    }

}
