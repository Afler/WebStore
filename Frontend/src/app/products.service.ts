import { Injectable } from '@angular/core';

export interface Product {
  id?: number
  image: string
  name: string
  description: string
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  products: Product[] = [
    {id: 1, image: 'https://avatars.mds.yandex.net/i?id=aede862dab0fe6e97d64bfc9d554912a-5427440-images-thumbs&n=13', name: 'Наименование', description: 'Описание товара, состав все дела, производитель и тд', price: '20000'},
  ]

  updateProducts(product: Product) {
    this.products.unshift(product) // добавляем в начало списка
  }

  getById(id: number) {
    return this.products.find(p => p.id ==id)
  }

}
