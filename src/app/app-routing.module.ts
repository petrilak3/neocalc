import { RegisterComponent } from './pages/login/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren: () => import('./pages/uvod/main.module').then(m => m.MainModule)},
  {path:'login',loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path:'vypocty',loadChildren: () => import('./pages/nastroje/dashboard.module').then(m => m.DashboardModule)},
  {path:'register', component:RegisterComponent}, 
  {path:'infuzie',loadChildren: () => import('./pages/infuzia/infuzia.module').then(m => m.InfuziaModule)},
  {path:'lieky',loadChildren: () => import('./pages/lieky/lieky.module').then(m => m.LiekyModule)},
  {path:'krivky',loadChildren: () => import('./pages/krivky/krivky.module').then(m => m.KrivkyModule)},
  {path:'hyper',loadChildren: () => import('./pages/hyperbili/hyperbili.module').then(m => m.HyperbiliModule)},
  {path:'odporucania',loadChildren: () => import('./pages/odporucania/odporucania.module').then(m => m.OdporucaniaModule)},
  {path:'resuscitacie',loadChildren: () => import('./pages/resuscitacie/resuscitacie.module').then(m => m.ResuscitacieModule)},
  {path:'mkch',loadChildren: () => import('./pages/mkch/mkch.module').then(m => m.MkchModule)},
  {path:'ulozene',loadChildren: () => import('./core/savedData/saved-data.module').then(m => m.SavedDataModule)},
  {path:'kontakty',loadChildren: () => import('./pages/kontakty/kontakty.module').then(m => m.KontaktyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
