import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { EvenementComponent } from './evenement/evenement.component';
import { CandidatComponent } from './CandidatD/Candidat/candidat.component';
import { AddCandidatComponent } from './CandidatD/add-candidat/add-candidat.component';
import { UpdateCandidatComponent } from './CandidatD/update-candidat/update-candidat.component';
import { VoterComponent } from './voter/voter.component';
import { AddCriteresComponent } from './Criteres/add-criteres/add-criteres.component';
import { UpdateCriteresComponent } from './Criteres/update-criteres/update-criteres.component';
import { CriteresComponent } from './Criteres/criteres/criteres.component';
import { VoteCandOrGroupComponent } from './vote-cand-or-group/vote-cand-or-group.component';
import { ListCritereComponent } from './list-critere/list-critere.component';
import { RatingModule } from 'ng-starrating';
import { JuryComponent } from './jury/jury.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EvenementComponent,
    UpdateEvenementComponent,
    AddEvenementComponent,
    ConnexionComponent,
    CandidatComponent,
    AddCandidatComponent,
    UpdateCandidatComponent,
    VoterComponent,
    CriteresComponent,
    AddCriteresComponent,
    UpdateCriteresComponent,
    VoteCandOrGroupComponent,
    ListCritereComponent,
    JuryComponent,
    DashboardComponent,
    // AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RatingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
