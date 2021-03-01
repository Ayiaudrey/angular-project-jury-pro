import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../CandidatD/candidat.service';
import { CriteresService } from '../Criteres/criteres.service';
import { JuryService } from '../jury.service';
import { Candidat } from '../model/candidat.model';
import { Criteres } from '../model/criteres.model';
import { Jury } from '../model/jury.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  criteres : Criteres []= [];
  candidat: Candidat [] = [];
  jury: Jury[] = [];
  id: any | undefined;


  constructor(private criteresService: CriteresService, private router: Router,  private sanitizer: DomSanitizer, private activatedRoute : ActivatedRoute, private candidatService : CandidatService, private juryservice : JuryService) {
    activatedRoute.params.subscribe(x => {
      console.log('url', x);
      this.id = x.evenementId
    })
   }

  ngOnInit(): void {
    this.criteresService.listeCriteres(this.activatedRoute.snapshot.params.evenementId).subscribe((crit: any) => {
      console.log('critere',crit);
      this.criteres = crit;
      });


      this.candidatService.voterCandid(this.activatedRoute.snapshot.params.evenementId).subscribe((prods: any) => {
        console.log('array', prods);
         this.candidat = prods;
       });
  }
  imageSrc(img:string) :SafeUrl{

    let base64: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(atob(img));
    console.log(base64);

      return base64;
      }

}
