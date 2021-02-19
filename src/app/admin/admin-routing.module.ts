import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvenementComponent } from '../evenement/evenement.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path:'', component:AdminComponent},
  {path: "evenement", component : EvenementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
