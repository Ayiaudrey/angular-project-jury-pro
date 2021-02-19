
import { Injectable } from '@angular/core';
import {Evenement} from '../model/evenement.model';
import {Observable} from 'rxjs/';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  /* listeEvenement() {
    throw new Error('Method not implemented.');
  } */
  apiURL: string = 'http://localhost:8080/evenement';
  apiURL2 : string = 'http://localhost:8080/evenement/delete';
  apiURL3: string = 'http://localhost:8080/evenements';
  apiURL4 : string = 'http://localhost:8080/evenements/participant';
 



  evenement: Evenement []= [];

  constructor(private http: HttpClient) {

   }
   /*  listeEvenement() {
    return this.http.get(this.apiURL);
  } */
  //  listeEvenement(): Observable<Evenement[]> {
  //   return this.http.get<Evenement[]>(this.apiURL);
  // }

numberParticipant(): Observable<Evenement[]>{
    return this.http.get<Evenement[]>(this.apiURL4);
  }

supprimerEvenement(evenementId: number){
     const url = `${this.apiURL2}/${evenementId}`;
     return this.http.delete(url, httpOptions);
    }

ajouterEvenement(event: Evenement):Observable<Evenement>{
      return this.http.post<Evenement>(this.apiURL3, event, httpOptions);
 }
consulterEvenement (id: number): Observable<Evenement> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Evenement>(url);
}

updateEvenement(event :Evenement) : Observable<Evenement>
    {
    return this.http.post<Evenement>(this.apiURL3, event, httpOptions);
    }


 /* updateEvenement(event:Evenement)
 {
  // console.log(p);
this.supprimerEvenement();
this.ajouterEvenement(event);
} */
  }






