import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Flavour } from "./app.FlavourInterface";

@Injectable({
  providedIn: 'root',
})

export class FlavourService {
  private baseUrl : string = '';

  constructor(private http: HttpClient) {}

  getFlavours(): Observable<Flavour[]>{
    return this.http.get<Flavour[]>(`${this.baseUrl}/api/v2/ice/flavours`)
  }

  addFlavours(form: FormData): Observable<Flavour>{
    return this.http.post<Flavour>(`${this.baseUrl}/api/v2/ice/flavours`, form);
  }

  deleteFlavour(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/api/v2/ice/flavours/` + id);
  }
}
