import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement/evenement.service';
import { Evenement } from '../model/evenement.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styles: [
  ]
})
export class UpdateEvenementComponent implements OnInit {
  currentEvenement = new Evenement();
  id: any | undefined;
  constructor(private activatedRoute: ActivatedRoute, private router :Router, private evenementService: EvenementService) {
   activatedRoute.params.subscribe(x => {
      console.log('url', x);
      this.id = x.evenementId
    })
  }

  ngOnInit() {
     //console.log('url', this.currentEvenement);
    this.evenementService.consulterEvenement(this.id).subscribe( event =>{ this.currentEvenement = event; } );
  }

  updateEvenement() {
    console.log(this.currentEvenement);
    this.evenementService.updateEvenement(this.currentEvenement).subscribe(
      () =>
    {this.router.navigate(['evenement']);
},
(error) => { alert("Problème lors de la modification !"); }
);
}

/* currentEvenement = new Evenement();
id: any | undefined;
constructor(private activatedRoute: ActivatedRoute, private router :Router, private evenementService: EvenementService) {
   activatedRoute.params.subscribe(x => {
    console.log('url', x);
    this.id = x.evenementId
  })
 */
   /* addEvenement(){
    this.currentEvenement.ajouterEvenement(this.newEvenement).subscribe(event =>{
      console.log(event);
    });
    this.router.navigate(['evenement'])
} */
  }




