import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LiekyComponent } from './lieky/lieky.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: LiekyComponent/*,
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}*/
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiekyRoutingModule { }