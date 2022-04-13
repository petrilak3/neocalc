import { KontaktyRoutingModule } from './kontakty-routing.module';
import { KontaktyComponent } from './kontakty/kontakty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PericenterComponent } from './kontakty/components/pericenter/pericenter.component';

@NgModule({
  declarations: [KontaktyComponent,PericenterComponent],
  imports: [
    CommonModule,
    KontaktyRoutingModule
  ],
  exports: [KontaktyComponent]
})
export class KontaktyModule { }
