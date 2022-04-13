import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { KrivkyComponent } from './krivky/krivky.component';
 
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: KrivkyComponent/*,
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}*/
  } 
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KrivkyRoutingModule { }