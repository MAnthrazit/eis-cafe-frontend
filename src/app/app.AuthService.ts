import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./app.UserInterface";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})

export class AuthService {
  baseUrl : string = '';
  auth : boolean = false;

  constructor(private http: HttpClient){ }


  login(form : FormData) {
    this.http.post<any>(`${this.baseUrl}/login`, form).subscribe(
      (data: any) => {
        this.auth = true;
        localStorage.setItem('token', data.jwt);
        alert(data.jwt);
      },
      (error: any) => {
        console.error(error.message);
      }
    )
  }

  logout() : void {
    localStorage.removeItem('token');
    this.auth = false;
  }
}


