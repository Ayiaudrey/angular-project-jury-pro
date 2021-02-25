
import {Observable} from 'rxjs/';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Candidat} from '../model/candidat.model';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  apiURL: string = 'http://localhost:8080/candidat';
  apiURL2 : string = 'http://localhost:8080/candidat/delete';
  apiURL3: string = 'http://localhost:8080/candidats';
  apiURL5 : string= 'http://localhost:8080/candidats/event';

candidat:  Candidat []= [];


  constructor(private http: HttpClient) {

  }
  //  listeCandidat() {
  //   return this.http.get(this.apiURL);
  // }
listeCandidat(): Observable<Candidat[]> {
   return this.http.get<Candidat[]>(this.apiURL);
  }

supprimerCandidat(candidat_id: number){
     const url = `${this.apiURL2}/${candidat_id}`;
     return this.http.delete(url, httpOptions);

    }
 ajouterCandidat(candid: Candidat):Observable<Candidat>{
      return this.http.post<Candidat>(this.apiURL3, candid, httpOptions);
 }
 consulterCandidat (id: number): Observable<Candidat> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Candidat>(url);
}

updateCandidat(candid :Candidat) : Observable<Candidat>{
    return this.http.post<Candidat>(this.apiURL3, candid, httpOptions);
    }

voterCandid(id: number): Observable <Candidat> {
    const url = `${this.apiURL5}/${id}`;
    return this.http.get<Candidat>(url);

}
}
