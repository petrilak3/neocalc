import { RedcodeComponent } from './components/redcode/redcode.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { ResuscitacieComponent } from './resuscitacie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResuscitacieRoutingModule } from './resuscitacie-routing.module';



@NgModule({
  declarations: [ResuscitacieComponent,AlgorithmsComponent,RedcodeComponent],
  imports: [
    CommonModule,
    ResuscitacieRoutingModule
  ],
  exports: [ResuscitacieComponent,AlgorithmsComponent,RedcodeComponent]
})
export class ResuscitacieModule { }
