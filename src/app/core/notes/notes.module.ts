import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemNotesComponent } from './item-notes/item-notes.component';



@NgModule({
  declarations: [ItemNotesComponent],
  imports: [
    CommonModule
  ],
  exports:[ItemNotesComponent]
})
export class NotesModule { }
