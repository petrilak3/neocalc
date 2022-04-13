import { ItemsComponent } from './lieky/components/items/items.component';
import { LiekyComponent } from './lieky/lieky.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesModule } from 'src/app/core/notes/notes.module';
import { LiekyRoutingModule } from './lieky-routing.module';


@NgModule({
  declarations: [LiekyComponent,ItemsComponent],
  imports: [
    CommonModule,
    NotesModule,
    LiekyRoutingModule
  ],
  exports: [LiekyComponent]
})
export class LiekyModule { }
