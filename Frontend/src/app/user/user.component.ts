import { Component, OnInit } from '@angular/core';

export interface User {
  id?: number
  image: string
  firstName: string
  lastName: string
  patronymicName: string
  age: number
  country: string
  city: string
  adress: string

}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [
    {id: 1,
      image: 'https://i.pinimg.com/originals/a8/82/07/a88207952a461e666d3737f2e9d5a2a7.jpg',
      firstName: 'Мурзик',
      lastName: 'Котов',
      patronymicName: 'Барсикович',
      age: 25,
      country: 'Россия',
      city: 'Москва',
      adress: 'Мкад, объездная канализация, люк 48, 4-тый поворот на лево'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

  addUser(user: User) {
    this.users.unshift(user) // добавляем в начало списка
  }
  getUser(){

  }
  setUser(){

  }

}
