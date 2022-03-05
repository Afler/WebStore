import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../products.service";



@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>()

  name = ''
  description = ''
  price = ''
  image = ''
  id = 2

  constructor() { }

  ngOnInit() {
  }

  addImage() {
  }

  addProduct() {
    if (this.name.trim() && this.description.trim() && this.price.trim() && this.image.trim()) {
      const product: Product = {
        id: this.id,
        image: this.image,
        name: this.name,
        description: this.description,
        price: this.price
      }
      this.onAdd.emit(product)
      this.name = this.description = this.price = this.image =''
      this.id+=1
    }
  }


}
