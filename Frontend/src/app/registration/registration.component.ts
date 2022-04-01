import {Component, ViewEncapsulation} from '@angular/core';
import {NewUser} from "../entity/NewUser";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent {
  username!: string;
  password!: string;
  email!: string;
  selectedRole!: number;
  roleToPass: string[] = [];

  roles = [
    {id: 1, name: "ROLE_ADMIN", placeholder: "Администратор"},
    {id: 2, name: "ROLE_CUSTOMER", placeholder: "Покупатель"}
  ]

  constructor(private userService: UsersService,
              private snackBar: MatSnackBar) {
  }

  onRegisterClick() {
    this.roleToPass.push(this.roles[this.selectedRole - 1].name);
    let newUser = new NewUser(this.username, this.password, this.email, this.roleToPass)
    this.userService.register(newUser).subscribe(data => {
      this.snackBar.open(data, 'OK', {duration: 1000 * 10});
    });
  }
}
