import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jury } from './model/jury.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuryService {
  apiURL: string = 'http://localhost:8080/jury/event';

  jury: Jury[] = [];

  constructor(private http: HttpClient) { }

  listeJury(id: number): Observable<Jury> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Jury>(url);
   }
}
