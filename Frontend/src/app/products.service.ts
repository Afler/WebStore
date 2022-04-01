import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const API_URL: string = 'http://localhost:8081'

export interface Product {
  id: number
  name: string,
  product?: [],
  cost: string
  description?: string
  quantity?: number
  image: string
  category?: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: 1,
      name: 'Наименование',
      product: [],
      cost: '20000',
      description: 'Описание товара, состав все дела, производитель и тд',
      quantity: 12,
      image: 'https://avatars.mds.yandex.net/i?id=aede862dab0fe6e97d64bfc9d554912a-5427440-images-thumbs&n=13',
      category: 'category'
    },
  ]

  constructor(private http: HttpClient) {
  }


  updateProducts(product: Product) {
    this.products.unshift(product) // добавляем в начало списка
  }

  getById(id: number) {
    return this.products.find(p => p.id == id)
  }

  saveProduct(product: Product) {
    console.log("check2");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post<Product>(API_URL + '/product/save', product, {headers: headers});
  }

  addProductToBasket(product: Product, amount: number) {
    console.log('addProductToBasket');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(product);
    return this.http.post('http://localhost:8081/product/addProduct?amount=1', product, {headers: headers});
  }
}
