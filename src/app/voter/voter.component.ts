import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../CandidatD/candidat.service';
import { CriteresService } from '../Criteres/criteres.service';
import { Candidat } from '../model/candidat.model';
import { Criteres } from '../model/criteres.model';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

candidat :Candidat[] = [];
criteres :  Criteres []= [];
newCandidat : Candidat[] = [];
id: any | undefined;


  constructor(private candidatService : CandidatService, private router: Router, private sanitizer: DomSanitizer, private activatedRoute : ActivatedRoute, private criteresService : CriteresService) {
    activatedRoute.params.subscribe(x => {
      console.log('url', x);
      this.id = x.evenementId
    })
  }

  ngOnInit(): void {
    this.candidatService.voterCandid(this.activatedRoute.snapshot.params.evenementId).subscribe((prods: any) => {
      console.log('array', prods);
       this.candidat = prods;
     });

     this.ListCriteresVote();
  }

  ListCriteresVote(){
     this.criteresService.listeCriteres(this.id).subscribe((crit: any) => this.criteres = crit);
  }


  imageSrc(img:string) :SafeUrl{

    let base64: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(atob(img));
    console.log(base64);

      return base64;
      }
}
