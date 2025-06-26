import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { Flavour } from "./app.FlavourInterface";

@Injectable({
  providedIn: 'root',
})

export class FlavourService {
  private baseUrl : string = '';

  constructor(private http: HttpClient) {}

  getFlavours(): Observable<Flavour[]>{
    return this.http.get<Flavour[]>(`${this.baseUrl}/flavours`)
  }

  addFlavours(form: FormData): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/flavours`, form);
  }

  deleteFlavour(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/flavours/` + id);
  }
}
