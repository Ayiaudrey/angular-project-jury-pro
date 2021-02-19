import { Component, OnInit } from '@angular/core';
import { Evenement } from '../model/evenement.model';
import { EvenementService } from './evenement.service';
import {Router} from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

evenement : Evenement []= [];
base64 : SafeUrl []= [];


  constructor(private evenementService: EvenementService, private router: Router,  private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {
    // this.evenementService.listeEvenement().subscribe((event: SafeUrl) => {
    //    console.log(event);
    //    this.evenement = event;

    //  });
  this.evenementService.numberParticipant().subscribe(prods => {
     console.log('array', prods);
      this.evenement = prods;
    });
  }


  supprimerEvenement(event: any){
     let conf = confirm("Etes-vous sûr ?");
     if (conf) this.evenementService.supprimerEvenement(event.evenement_id).subscribe(() => {
             console.log("evenement supprimé");
                });
          this.router.navigate(['evenement']).then(() => {
           window.location.reload();
     });
  }
 


  imageSrc(img:string) :SafeUrl{

    let base64: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(atob(img));
    console.log(base64);

      return base64;
      }
}


