import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard} from '@angular/fire/auth-guard';
import { MkchComponent } from './mkch/mkch.component';

const routes: Routes = [
  {
    path: '',
    component: MkchComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MkchRoutingModule { }