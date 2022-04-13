import { MkchComponent } from './mkch/mkch.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MkchRoutingModule } from './mkch-routing.module';



@NgModule({
  declarations: [MkchComponent],
  imports: [
    CommonModule,
    MkchRoutingModule
  ],
  exports: [MkchComponent]
})
export class MkchModule { }
