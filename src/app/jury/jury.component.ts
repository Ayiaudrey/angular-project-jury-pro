import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { JuryService } from '../jury.service';
import { Jury } from '../model/jury.model';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.css']
})
export class JuryComponent implements OnInit {
  jury: Jury[] = [];

  constructor(private juryservice : JuryService, private router: Router,  private sanitizer: DomSanitizer, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.juryservice.listeJury(this.activatedRoute.snapshot.params.evenementId).subscribe((jur: any) => {
      console.log('jury',jur);
      this.jury = jur;
      });
  }

}
