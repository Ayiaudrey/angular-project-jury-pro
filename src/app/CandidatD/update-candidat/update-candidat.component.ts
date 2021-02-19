import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/model/candidat.model';
import { CandidatService } from '../candidat.service';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {

  currentCandidat = new Candidat();
  id: any | undefined;
  imgUrl: any;
  newCandidat: any;

  constructor(private activatedRoute: ActivatedRoute, private router :Router, private candidatService: CandidatService, private sanitizer:DomSanitizer) {
    activatedRoute.params.subscribe(x => {
      console.log('url', x);
      this.id = x.candidat_id
    })
   }

  ngOnInit(): void {
    this.candidatService.consulterCandidat(this.id).subscribe(
      event =>{
        this.currentCandidat = event;
        this.imgUrl = this.imageSrc(this.currentCandidat.candidat_photo)} );
  }

  updateCandidat() {
    console.log(this.currentCandidat);
    this.candidatService.updateCandidat(this.currentCandidat).subscribe(
      () =>
    {this.router.navigate(['candidat']);
},
(error) => { alert("Problème lors de la modification !"); }
);
}

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
    this.newCandidat.candidat_photo = data;
  };


  // utilsation du reader
  reader.readAsDataURL(imageFile);

}



}
