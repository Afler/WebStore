import {Component, ViewEncapsulation} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private usersService: UsersService) {
  }

  loginPressed() {
    this.usersService.login().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('login success')
    });
  }
}
