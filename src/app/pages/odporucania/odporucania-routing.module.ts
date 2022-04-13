import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OdporucaniaComponent } from './odporucania.component';

const routes: Routes = [
  {
    path: '',
    component: OdporucaniaComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OdporucaniaRoutingModule { }