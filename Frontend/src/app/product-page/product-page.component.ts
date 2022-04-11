import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../entity/Product";
import {deserialize, deserializeArray} from "class-transformer";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {

  visible = false;
  locAmount: Array<number> = [];
  amount = 1;
  product!:Product
  getProduct!: Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) {

  }

  ngOnInit(): void {

    this.productsService.getProduct(this.productsService.getLocId()).subscribe(data => {this.getProduct = deserialize(Product, <string>data.body)})

  }

  onInputAmount(event: any) {
    this.amount = event.target.value;
  }

  addButton() {
    this.route.params.subscribe((params: Params) => {
      // @ts-ignore
      this.product = this.productsService.getById(params.id)
    })
    // this.productsService.addProductToBasket(this.product, this.amount).subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('success')
    // })
    this.productsService.addProductToBasket(3, this.amount).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('logout success')
    });
  }
}
