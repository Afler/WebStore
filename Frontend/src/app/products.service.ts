import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Product} from "./entity/Product";

const API_URL: string = 'http://localhost:8081'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  locId: number = 0

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }


  saveProduct(product: Product) {
    console.log("check2");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    })
    return this.http.post(API_URL + '/product/save?product=', product, {headers: headers});
  }

  addProductToBasket(id: number, amount: number) {
    console.log('addProductToBasket');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    });
    console.log(this.cookieService.get('access_token'))
    const body: [] = []
    return this.http.post(API_URL + '/product/addProduct?amount=' + amount + '&username=' + this.cookieService.get('userName') + '&productId=' + id, body, {headers: headers});
    // return this.http.post(API_URL + '/product/addProduct?amount=' + 2 + '&username=' + 'user1' + '&productId=' + '3', {headers: headers});
  }

  getAllProducts() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    });
    return this.http.get(API_URL + '/product/getProducts', {
      headers: headers,
      responseType: 'text' as 'json',
      observe: 'response'
    });
  }

  getProduct(id: number) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    });
    const params = {
      'id': id
    }
    return this.http.get(API_URL + '/product/getProduct', {
      headers: headers,
      params: params,
      responseType: 'text' as 'json',
      observe: 'response'
    });
  }

  getProducts(sortType: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    });
    return this.http.get(API_URL + '/product/getProducts?sortType=' + sortType, {
      headers: headers,
      responseType: 'text' as 'json',
      observe: 'response'
    });
  }

  getProductsByCategory(category: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    });
    return this.http.get(API_URL + '/product/getProducts?category=' + category, {
      headers: headers,
      responseType: 'text' as 'json',
      observe: 'response'
    });


  }

  getBasketProducts() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('access_token')
    });
    return this.http.get(API_URL + '/product/getBasketProducts' + '?username=' + this.cookieService.get('userName'), {
      headers: headers,
      responseType: 'text' as 'json',
      observe: 'response'
    });
  }

  sendId(id: number) {
    this.locId = id
    console.log(id)
  }

  getLocId() {
    return this.locId
  }
}
