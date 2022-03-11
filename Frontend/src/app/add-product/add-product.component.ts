import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductsService} from "../products.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
