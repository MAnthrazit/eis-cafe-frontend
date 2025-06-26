import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./app.UserInterface";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})

export class AuthService {
  baseUrl = '';

  constructor(private http: HttpClient){ }


  login(form : FormData) {
    this.http.post<User>(`${this.baseUrl}/login`, form).subscribe((data) => {
      const timeout = data.expire;
      console.log(data);

      localStorage.setItem('id_token', data.id_token);
      localStorage.setItem('expires_at', timeout.toString());
    })
  }

  logout() : void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
}


