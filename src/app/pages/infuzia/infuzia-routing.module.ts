import { InfuziaComponent } from './infuzia/infuzia.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: InfuziaComponent/*,
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}*/
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfuziaRoutingModule { }