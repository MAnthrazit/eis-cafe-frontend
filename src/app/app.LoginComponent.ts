import { Component } from "@angular/core";
import { AuthService } from "./app.AuthService";

@Component({
  selector: 'login-component',
  templateUrl: 'app.LoginComponent.html',
  styleUrl: 'app.LoginComponent.css',
})

export class LoginComponent{

  username = '';
  password = '';

  constructor(private auth: AuthService){}

  login(event : Event): void {
    event.preventDefault();
    const form : FormData = new FormData();
    form.append('username', this.username);
    form.append('password', this.password);

    this.auth.login(form);
  }

  logout(event : Event): void {
    event.preventDefault();

    this.auth.logout();
  }
}
