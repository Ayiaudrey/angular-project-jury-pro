import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../CandidatD/candidat.service';
import { Candidat } from '../model/candidat.model';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  candidat :Candidat[] = [] ;
newCandidat : Candidat[] = [];
id: any | undefined;


  constructor(private candidatService : CandidatService, private router: Router, private sanitizer: DomSanitizer, private activatedRoute : ActivatedRoute) {
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
  }


  imageSrc(img:string) :SafeUrl{

    let base64: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(atob(img));
    console.log(base64);

      return base64;
      }
}
