import { Component, OnInit } from '@angular/core';
import { DomSanitizer , SafeUrl  } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/evenement/evenement.service';
import { Candidat } from 'src/app/model/candidat.model';
import { Evenement } from 'src/app/model/evenement.model';
import { CandidatService } from '../candidat.service';

declare var $:any;

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

candidat : Candidat []= [];
base64 : SafeUrl []= [];


  constructor(private candidatService: CandidatService, private router: Router,  private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.candidatService.listeCandidat().subscribe(candid => {
      console.log(candid);
      this.candidat = candid;
      });
     }

  supprimerCandidat(candid: any){
    let conf = confirm("Etes-vous sûr ?");
    if (conf) this.candidatService.supprimerCandidat(candid.candidat_id).subscribe(() => {
            console.log("candidat supprimé");
               });
         this.router.navigate(['candidat']).then(() => {
          window.location.reload();
    });
 }
 imageSrc(img:string) :SafeUrl{

   let base64: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(atob(img));
   console.log(base64);

     return base64;
     }

    }
