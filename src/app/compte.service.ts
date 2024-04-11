import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private urlServeurAPI = "http://localhost:8080/api/compte";

  constructor(private http: HttpClient) { }

  verificationUser(data: any): Observable<any> {

    return this.http.post<any>(this.urlServeurAPI + "/verificationUser", data, {
      observe: 'response',
    });
  }
}