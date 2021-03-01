import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/CandidatD/candidat.service';
import { Candidat } from 'src/app/model/candidat.model';
import { Criteres } from 'src/app/model/criteres.model';
import { CriteresService } from '../criteres.service';



@Component({
  selector: 'app-criteres',
  templateUrl: './criteres.component.html',
  styleUrls: ['./criteres.component.css']
})
export class CriteresComponent implements OnInit {


criteres : Criteres []= [];
candidat: Candidat [] = [];
newCriteres : Criteres[] = [];
id: any | undefined;
base64 : SafeUrl []= [];

  constructor(private criteresService: CriteresService, private router: Router,  private sanitizer: DomSanitizer, private activatedRoute : ActivatedRoute, candidatService: CandidatService) {
    activatedRoute.params.subscribe(x => {
      console.log('url', x);
      this.id = x.evenementId
    })
  }

  ngOnInit(): void {

    this.criteresService.voterCandid(this.activatedRoute.snapshot.params.evenementId).subscribe((cand: any) => {
      console.log('candidat',cand);
      this.candidat = cand;

      this.criteresService.listeCriteres(this.activatedRoute.snapshot.params.evenementId).subscribe((crit: any) => {
        console.log('critere',crit);
        this.criteres = crit;
        });

      });


  }

  imageSrc(img:string) :SafeUrl{

    let base64: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(atob(img));
    console.log(base64);

      return base64;
      }
}












