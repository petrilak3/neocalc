import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SavedDataComponent } from './saved-data/saved-data.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: SavedDataComponent,
    canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavedDataRoutingModule { }