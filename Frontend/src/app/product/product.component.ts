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
    if (this.name.trim() || this.description.trim() || this.price.trim() || this.image.trim()) {
        if(this.image != '')
          this.product.image = this.image
        if(this.name != '')
          this.product.name = this.name
        if(this.description != '')
          this.product.description = this.description
        if(this.price != '')
          this.product.cost = this.price
      }
    }

}
