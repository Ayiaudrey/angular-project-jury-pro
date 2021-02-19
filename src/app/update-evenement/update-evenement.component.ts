import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement/evenement.service';
import { Evenement } from '../model/evenement.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styles: [
  ]
})
export class UpdateEvenementComponent implements OnInit {
  currentEvenement = new Evenement();
  id: any | undefined;
  imgUrl: any;
  newEvenement: any;
  constructor(private activatedRoute: ActivatedRoute, private router :Router, private evenementService: EvenementService, private sanitizer:DomSanitizer) {
   activatedRoute.params.subscribe(x => {
      console.log('url', x);
      this.id = x.evenementId
    })
  }

  ngOnInit() {
     //console.log('url', this.currentEvenement);
    this.evenementService.consulterEvenement(this.id).subscribe(
      event =>{
        this.currentEvenement = event;
        this.imgUrl = this.imageSrc(this.currentEvenement.evenement_photo)} );
  }

  updateEvenement() {
    console.log(this.currentEvenement);
    this.evenementService.updateEvenement(this.currentEvenement).subscribe(
      () =>
    {this.router.navigate(['evenement']);
},
(error) => { alert("Problème lors de la modification !"); }
);
}

/* currentEvenement = new Evenement();
id: any | undefined;
constructor(private activatedRoute: ActivatedRoute, private router :Router, private evenementService: EvenementService) {
   activatedRoute.params.subscribe(x => {
    console.log('url', x);
    this.id = x.evenementId
  })
 */
   /* addEvenement(){
    this.currentEvenement.ajouterEvenement(this.newEvenement).subscribe(event =>{
      console.log(event);
    });
    this.router.navigate(['evenement'])
} */
imageSrc(img:string) :SafeUrl{

  let base64 = this.sanitizer.bypassSecurityTrustUrl(atob(img));
  console.log(base64);

    return base64;
    }

onImageSelected(aud : any) {

  //recuperation de l'image en format file
  let imageFile = aud.target.files[0];

  //declaration d'un reader qui va permettre de transformer en base64
  const reader = new FileReader();

  //declaration de la methode reader
  reader.onload = (e: any) => {

    //affichage de l'image selectionnée transformée en base64 et qui se recupere par e.target.result
    this.imgUrl = e.target.result;

    // declaration d'un tableau qui va contenir notre byte array
    var data = [];

    //tranformation du base64 de l'image selectionnée et tranformée en base64 ====> en byte array
    for (var i = 0; i < e.target.result.length; i++) {
      data.push(e.target.result.charCodeAt(i));
    }

    //attribution de notre byte array ainsi obtenu à notre variable evenement_photo
    this.newEvenement.evenement_photo = data;
  };


  // utilsation du reader
  reader.readAsDataURL(imageFile);

}


  }





