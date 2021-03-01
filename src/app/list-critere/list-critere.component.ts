import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CriteresService } from '../Criteres/criteres.service';
import { Criteres } from '../model/criteres.model';

@Component({
  selector: 'app-list-critere',
  templateUrl: './list-critere.component.html',
  styleUrls: ['./list-critere.component.css']
})
export class ListCritereComponent implements OnInit {

  criteres : Criteres []= [];

  constructor(private criteresService: CriteresService, private router: Router,  private sanitizer: DomSanitizer, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.criteresService.listeCritere().subscribe(candid => {
      console.log(candid);
      this.criteres = candid;
      });


  }

  supprimerCritere(candid: any){
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.criteresService.supprimerCritere(candid.critere_id).subscribe(() => {
            console.log("critere supprimé");
               });
         this.router.navigate(['listCritere']).then(() => {
          window.location.reload();
    });

  }
}
