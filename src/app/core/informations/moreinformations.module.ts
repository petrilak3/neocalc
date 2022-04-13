import { InformationsComponent } from './informations.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [InformationsComponent],
  imports: [
    CommonModule
  ],
  exports:[InformationsComponent]
})
export class MoreinformationsModule { }
