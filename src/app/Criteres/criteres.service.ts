import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criteres } from '../model/criteres.model';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CriteresService {

  apiURL: string = 'http://localhost:8080/criteres/event';

  criteres:  Criteres []= [];

  constructor(private http: HttpClient) {

  }

  listeCriteres(id: number): Observable<Criteres> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Criteres>(url);
   } 

}
