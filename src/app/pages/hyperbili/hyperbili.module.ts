import { NormogramsComponent } from './hyper/components/normograms/normograms.component';
import { HyperComponent } from './hyper/hyper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { HyperbiliRoutingModule } from './hyperbili-routing.module';
import { HyperIndicationsComponent } from './hyper-indications/hyper-indications.component';



@NgModule({
  declarations: [HyperComponent,HyperIndicationsComponent,NormogramsComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    HyperbiliRoutingModule
  ],
  exports:[HyperComponent,HyperIndicationsComponent,NormogramsComponent]
})
export class HyperbiliModule { }
