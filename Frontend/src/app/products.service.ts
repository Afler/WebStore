import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const API_URL: string = 'http://localhost:8081'

export interface Product {
  id?: number
  image: string
  name: string
  description: string
  cost: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  products: Product[] = [
    {id: 1, image: 'https://avatars.mds.yandex.net/i?id=aede862dab0fe6e97d64bfc9d554912a-5427440-images-thumbs&n=13', name: 'Наименование', description: 'Описание товара, состав все дела, производитель и тд', cost: '20000'},
  ]

  constructor(private http: HttpClient) {
  }


  updateProducts(product: Product) {
    this.products.unshift(product) // добавляем в начало списка
  }

  getById(id: number) {
    return this.products.find(p => p.id ==id)
  }

  saveProduct(product: Product) {
    console.log("check2");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const body = product;
    return this.http.post<Product>(API_URL + '/product/save', body, {headers: headers});
  }
}
