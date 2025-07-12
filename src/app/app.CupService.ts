import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})

export class CupService {
  baseUrl : string  = '';

  constructor(private http: HttpClient) {}
}



