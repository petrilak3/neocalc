import { NewsComponent } from './main/news/news.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from 'src/app/services/item.service';



@NgModule({
  declarations: [MainComponent,NewsComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [ItemService],
  exports: [MainComponent]
})
export class MainModule { }
