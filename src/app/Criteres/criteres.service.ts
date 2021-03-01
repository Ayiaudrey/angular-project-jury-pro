import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../model/candidat.model';
import { Criteres } from '../model/criteres.model';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CriteresService {

  apiURL: string = 'http://localhost:8080/criteres/event';
  apiURL1: string = 'http://localhost:8080/criteres';
  apiURL5 : string= 'http://localhost:8080/candidats/event';
  apiURL2 : string = 'http://localhost:8080/critere/delete';
  apiURL3: string = 'http://localhost:8080/criteres';

  criteres:  Criteres []= [];

  constructor(private http: HttpClient) {

  }

  listeCriteres(id: number): Observable<Criteres> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Criteres>(url);
   }

   voterCandid(id: number): Observable <Candidat> {
    const url = `${this.apiURL5}/${id}`;
    return this.http.get<Candidat>(url);

}

  listeCritere(): Observable<Criteres[]> {
    return this.http.get<Criteres[]>(this.apiURL1);
   }

   supprimerCritere (critere_id: number){
    const url = `${this.apiURL2}/${critere_id}`;
    return this.http.delete(url, httpOptions);

   }

   ajouterCritere(candid: Criteres):Observable<Criteres>{
    return this.http.post<Criteres>(this.apiURL3, candid, httpOptions);
}
}

