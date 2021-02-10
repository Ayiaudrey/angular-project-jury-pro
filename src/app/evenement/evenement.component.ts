import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from './evenement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

evenement : Evenement []= [];


  constructor(private evenementService: EvenementService, private router: Router) {

  }

  ngOnInit(): void {
    /*  this.evenementService.listeEvenement().subscribe((event: any) => {
       console.log(event);
       this.evenement = event;

     }); */

  this.evenementService.numberParticipant().subscribe(prods => {
     console.log('array', prods);
      this.evenement = prods;
    });
  }


  supprimerEvenement(event: any){
     let conf = confirm("Etes-vous sûr ?");
     if (conf) this.evenementService.supprimerEvenement(event.evenement_id).subscribe(() => {
             console.log("evenement supprimé");
                });
          this.router.navigate(['evenement']).then(() => {
           window.location.reload();
     });
  }

}

