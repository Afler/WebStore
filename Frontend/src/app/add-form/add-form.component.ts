import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../entity/Product";
import {MatSnackBar} from "@angular/material/snack-bar";


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
  image!: File;
  image1!: string;

  constructor(private productService: ProductsService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  addImage(event: any) {
    this.image = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      // convert image file to base64 string
      console.log('onFileSelected:', reader.result);
      this.image1 = ((<string>reader.result).split(';')[1]).split(',')[1];
      console.log('image:', this.image1);
    }, false);

    if (this.image) {
      reader.readAsDataURL(this.image);
    }
  }

  addProduct() {
    if (this.name.trim() && this.description.trim() && this.cost.trim() && this.image1.trim()) {
      const product: Product = {
        id: this.id,
        image: this.image1,
        name: this.name,
        description: this.description,
        cost: this.cost
      }
      this.onAdd.emit(product)
      this.name = this.description = this.cost = this.image1 = ''
      this.id += 1
    }
  }

  addProduct2() {
    console.log("check1");
    const product: Product = {
      id: this.id,
      image: this.image1,
      name: this.name,
      description: this.description,
      category: this.category,
      quantity: Number(this.quantity),
      cost: this.cost
    }
    this.id += 1
    let resp = this.productService.saveProduct(product);
    resp.subscribe(data => {
        console.log(data);
        this.snackBar.open('Товар сохранен', 'OK', {duration: 1000 * 10})
      },
      error => {
        this.snackBar.open('Товар не сохранен', 'OK', {duration: 1000 * 10})
      })
  }
}
