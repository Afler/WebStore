import {Component, OnInit} from '@angular/core';
import {Product, ProductsService} from "../products.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  product!: Product
  visible = false;
  locAmount: Array<number> = [];
  amount = 1;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // @ts-ignore
      this.product = this.productsService.getById(params.id)
    })
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
    this.productsService.addProductToBasket(this.product, this.amount).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('logout success')
    });
  }
}
