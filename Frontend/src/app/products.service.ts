import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

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
      name: 'product1',
      product: [],
      cost: '20000',
      description: 'Описание товара, состав все дела, производитель и тд',
      quantity: 12,
      image: 'https://avatars.mds.yandex.net/i?id=aede862dab0fe6e97d64bfc9d554912a-5427440-images-thumbs&n=13',
      category: 'category'
    },
  ]

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
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
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    });
    console.log(product);
    console.log(this.cookieService.get('access_token'))
    return this.http.post(API_URL + '/product/addProduct?amount=' + amount + '&username=' + this.cookieService.get('userName'), product, {headers: headers});
  }
}
