import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Criteres } from 'src/app/model/criteres.model';
import { CriteresService } from '../criteres.service';



@Component({
  selector: 'app-criteres',
  templateUrl: './criteres.component.html',
  styleUrls: ['./criteres.component.css']
})
export class CriteresComponent implements OnInit {

criteres : Criteres []= [];
newCriteres : Criteres[] = [];
id: any | undefined;

  constructor(private criteresService: CriteresService, private router: Router,  private sanitizer: DomSanitizer, private activatedRoute : ActivatedRoute) {
    activatedRoute.params.subscribe(x => {
      console.log('url', x);
      this.id = x.evenementId
    })
  }

  ngOnInit(): void {

    this.criteresService.listeCriteres(this.activatedRoute.snapshot.params.evenementId).subscribe((crit: any) => {
      console.log(crit);
      this.criteres = crit;
      });
  }

}












