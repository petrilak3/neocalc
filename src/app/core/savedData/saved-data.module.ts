import { SavedDataRoutingModule } from './saved-data-routing.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedDataComponent } from './saved-data/saved-data.component';



@NgModule({
  declarations: [SavedDataComponent,PatientDetailsComponent],
  imports: [
    CommonModule,
    SavedDataRoutingModule
  ],
  exports: [SavedDataComponent,PatientDetailsComponent]
})
export class SavedDataModule { }
