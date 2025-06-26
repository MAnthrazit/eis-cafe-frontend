import { Injectable } from "@angular/core";
import { Topping } from "./app.ToppingInterface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class ToppingService{
  private baseUrl : string = '';

  constructor(private http : HttpClient){}

  getToppings(type : string) : Observable<Topping[]>{
    return this.http.get<Topping[]>(`${this.baseUrl}/toppings/` + type);
  }

  addTopping(form: FormData) : Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/toppings`, form);
  }

  deleteTopping(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/toppings/` + id);
  }

}
