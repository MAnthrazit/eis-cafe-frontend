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
    return this.http.get<Topping[]>(`${this.baseUrl}/api/v2/ice/toppings/` + type);
  }

  addTopping(type: string, form: FormData) : Observable<Topping> {
    return this.http.post<Topping>(`${this.baseUrl}/api/v2/ice/toppings/` + type, form);
  }

  deleteTopping(id: number) : Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/api/v2/ice/toppings/` + id);
  }

}
