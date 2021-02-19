import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement/evenement.service';
import { Evenement } from '../model/evenement.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {

  newEvenement = new Evenement();
  imgUrl : any;



  constructor(private evenementService: EvenementService, private router: Router) { }

  ngOnInit(): void {


    // console.log(this.newEvenement);
}
addEvenement(){
  console.log(this.newEvenement);
  this.evenementService.ajouterEvenement(this.newEvenement).subscribe(e =>{
    console.log(e);
  });
  this.router.navigate(['evenement']).then(() => {window.location.reload();
  });
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
