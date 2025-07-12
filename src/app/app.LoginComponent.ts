import { Component } from "@angular/core";
import { AuthService } from "./app.AuthService";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'login-component',
  templateUrl: 'app.LoginComponent.html',
  styleUrl: 'app.LoginComponent.css',
  imports: [FormsModule],
})

export class LoginComponent{

  username : string = '';
  password : string = '';

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
