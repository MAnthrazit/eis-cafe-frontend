import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Job } from "./app.JobInterface"
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root',
})

export class JobService {
  private baseUrl : string = '';

  constructor( private http: HttpClient){}

  addJobRequest(form : FormData) : Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/api/v2/jobs`, form);
  }

  decideJobRequest(id: number, selector: string) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/api/v2/jobs/` + id + `/` + selector );
  }

  getJobRequestCV(id: number) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/api/v2/jobs/` + id );
  }

  getJobRequests() : Observable<Job[]> {
    return this.http.get<Job[]>(`${this.baseUrl}/api/v2/jobs`);
  }
}
