import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { HyperComponent } from './hyper/hyper.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: HyperComponent/*,
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}*/
  } 
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HyperbiliRoutingModule { }