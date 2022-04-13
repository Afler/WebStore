import {Component, ViewEncapsulation} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  visible = true;

  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
  }

}
