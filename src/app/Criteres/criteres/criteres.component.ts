import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/CandidatD/candidat.service';
import { Candidat } from 'src/app/model/candidat.model';
import { Criteres } from 'src/app/model/criteres.model';
import { VoteCandidat } from 'src/app/model/VoteCandidat.model';
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
commentaire: any[] = [];
id: any | undefined;
base64 : SafeUrl []= [];
currentRate = 0;

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
    // console.log(base64);

      return base64;
      }

      selectEtoileCandidat(data: any, critere: any, commentaires: any, event: any){

        console.log(data);
        console.log(critere);
        console.log(event);

        var note = (data*critere.critere_bareme)/5;
       const donnee: VoteCandidat= {

        jury_id : 1,
        evenement_id: event.evenement_id,
        candidat_id: event.candidat_id,
        note,
        commentaires,
        critere_id : critere.critere_id,

};



        this.criteresService.ajouterVote(donnee).subscribe(vot=> {
          console.log('data:', vot)
        })
      }
}












