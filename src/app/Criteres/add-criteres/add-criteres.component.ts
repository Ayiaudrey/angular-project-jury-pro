import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/evenement/evenement.service';
import { Criteres } from 'src/app/model/criteres.model';
import { Evenement } from 'src/app/model/evenement.model';
import { CriteresService } from '../criteres.service';

@Component({
  selector: 'app-add-criteres',
  templateUrl: './add-criteres.component.html',
  styleUrls: ['./add-criteres.component.css']
})
export class AddCriteresComponent implements OnInit {

  newCritere = new Criteres();
  evenement : Evenement []= [];

  constructor( private critereService: CriteresService, private evenementService: EvenementService, private router: Router) { }

  ngOnInit(): void {
    this.evenementService.numberParticipant().subscribe(prods => {
      console.log('array', prods);
       this.evenement = prods;
     });

  }
  addCriteres(){
    console.log(this.newCritere);
    this.critereService.ajouterCritere(this.newCritere).subscribe(e =>{
      console.log(e);
    });
    this.router.navigate(['listCritere']).then(() => {window.location.reload();
    });

  }
}
