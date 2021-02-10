import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement/evenement.service';
import { Evenement } from '../model/evenement.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {

  newEvenement = new Evenement();

  constructor(private evenementService: EvenementService, private router: Router) { }

  ngOnInit(): void {


    // console.log(this.newEvenement);
}
addEvenement(){ 
  console.log(this.newEvenement);
  this.evenementService.ajouterEvenement(this.newEvenement).subscribe(e =>{
    console.log(e);
  });
  this.router.navigate(['evenement']).then(() => {window.location.reload();
  });
}
}
