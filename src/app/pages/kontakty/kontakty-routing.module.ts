import { KontaktyComponent } from './kontakty/kontakty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 

const routes: Routes = [
  {
    path: '',
    component: KontaktyComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KontaktyRoutingModule { }