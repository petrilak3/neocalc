import { KrivkyComponent } from './krivky/krivky.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { KrivkyRoutingModule } from './krivky-routing.module';



@NgModule({
  declarations: [KrivkyComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    KrivkyRoutingModule
  ],
  exports: [KrivkyComponent]
})
export class KrivkyModule { }
