import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvenementComponent } from './evenement/evenement.component';
import {AddEvenementComponent} from './add-evenement/add-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CandidatComponent } from './CandidatD/Candidat/candidat.component';
import { AddCandidatComponent } from './CandidatD/add-candidat/add-candidat.component';
import { UpdateCandidatComponent } from './CandidatD/update-candidat/update-candidat.component';
import { VoterComponent } from './voter/voter.component';


const routes: Routes = [
  {path : "evenement", component : EvenementComponent},
  {path : "candidat", component : CandidatComponent},
  {path : "updateEvenement/:evenementId", component : UpdateEvenementComponent},
  {path : "AddEvenement", component : AddEvenementComponent},
  {path : "updateCandidat/:candidat_id", component : UpdateCandidatComponent},
  {path : "addCandidat", component : AddCandidatComponent},
  {path : "voter/:evenementId", component : VoterComponent},

  { path: 'connexion', component: ConnexionComponent },
  { path: 'admin', component: AdminComponent },
 { path: 'admin',loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},
 { path: '', component: ConnexionComponent},
 { path: '', pathMatch: 'full', redirectTo: 'connexion'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
