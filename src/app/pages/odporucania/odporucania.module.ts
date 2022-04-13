import { OdporucaniaComponent } from './odporucania.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OdporucaniaRoutingModule } from './odporucania-routing.module';



@NgModule({
  declarations: [OdporucaniaComponent],
  imports: [
    CommonModule,
    OdporucaniaRoutingModule
  ],
  exports: [OdporucaniaComponent]
})
export class OdporucaniaModule { }
