import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NewUser} from "./entity/NewUser";
import {CookieService} from "ngx-cookie-service";

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
export class UsersService {

  users: User[] = [
    {
      id: 1,
      image: 'https://i.pinimg.com/originals/a8/82/07/a88207952a461e666d3737f2e9d5a2a7.jpg',
      firstName: 'Мурзик',
      lastName: 'Котов',
      age: 25,
      country: 'Россия',
      city: 'Москва',
      adress: 'Мкад, объездная канализация, люк 48, 4-тый поворот на лево',
      admin: true
    }
  ]

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
  }

  login(username: string, password: string) {
    const params = {
      'username': username,
      'password': password
    }
    return this.http.get(API_URL + '/api/login', {
      params: params,
      responseType: 'text' as 'json',
      observe: 'response'
    })
  }

  register(newUser: NewUser) {
    return this.http.post(API_URL + '/api/registration', newUser, {
      responseType: 'text',
      observe: 'body'
    })
  }
}
