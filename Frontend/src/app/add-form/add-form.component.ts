import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../entity/Product";


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>()

  id = 1
  name = ''
  quantity = ''
  category = ''
  description = ''
  cost = ''
  image = ''

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
  }

  addImage() {
  }

  addProduct() {
    if (this.name.trim() && this.description.trim() && this.cost.trim() && this.image.trim()) {
      const product: Product = {
        id: this.id,
        image: this.image,
        name: this.name,
        description: this.description,
        cost: this.cost
      }
      this.onAdd.emit(product)
      this.name = this.description = this.cost = this.image = ''
      this.id += 1
    }
  }

  addProduct2() {
    console.log("check1");
    const product: Product = {
      id: this.id,
      image: this.image,
      name: this.name,
      description: this.description,
      category: this.category,
      quantity: Number(this.quantity),
      cost: this.cost
    }
    this.id += 1
    let resp = this.productService.saveProduct(product);
    resp.subscribe(data => {console.log(data)})
  }
}
