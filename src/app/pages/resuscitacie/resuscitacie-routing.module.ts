import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResuscitacieComponent } from './resuscitacie.component';

const routes: Routes = [
  {
    path: '',
    component: ResuscitacieComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResuscitacieRoutingModule { }