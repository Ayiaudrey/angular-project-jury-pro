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
    // AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
