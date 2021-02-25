import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/evenement/evenement.service';
import { Candidat } from 'src/app/model/candidat.model';
import { Evenement } from 'src/app/model/evenement.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  newCandidat = new Candidat();
  imgUrl : any;
  evenement : Evenement []= [];

  constructor(private candidatService: CandidatService, private router: Router,  private evenementService: EvenementService) {
  }

  ngOnInit(): void {

    this.evenementService.numberParticipant().subscribe(prods => {
      console.log('array', prods);
       this.evenement = prods;
     });

  }
  addCandidat(){
    console.log(this.newCandidat);
    this.candidatService.ajouterCandidat(this.newCandidat).subscribe(e =>{
      console.log(e);
    });
    this.router.navigate(['candidat']).then(() => {window.location.reload();
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
      this.newCandidat.candidat_photo = data;
    };

    // utilsation du reader
    reader.readAsDataURL(imageFile);

  }

}
