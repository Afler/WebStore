import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const API_URL: string = 'http://localhost:8081'

export interface User {
  id?: number
  image: string
  firstName: string
  lastName: string
  age: number
  country: string
  city: string
  adress: string
  admin: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  users: User[] = [
    {id: 1,
      image: 'https://i.pinimg.com/originals/a8/82/07/a88207952a461e666d3737f2e9d5a2a7.jpg',
      firstName: 'Мурзик',
      lastName: 'Котов',
      age: 25,
      country: 'Россия',
      city: 'Москва',
      adress: 'Мкад, объездная канализация, люк 48, 4-тый поворот на лево',
      admin: true}
  ]

  constructor(private http: HttpClient) {
  }

  getById(id: number) {
    return this.users.find(u => u.id == id)
  }

  saveUser(user: User) {
    console.log("check2");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const body = user;
    return this.http.post<User>(API_URL + '/user/save', body, {headers: headers});
  }
}
