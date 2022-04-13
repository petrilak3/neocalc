import { MoreinformationsModule } from 'src/app/core/informations/moreinformations.module';
import { NotesModule } from 'src/app/core/notes/notes.module';
import { ItemsComponent } from './infuzia/components/items/items.component';
import { InfuziaComponent } from './infuzia/infuzia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfuziaRoutingModule } from './infuzia-routing.module';



@NgModule({
  declarations: [InfuziaComponent,ItemsComponent],
  imports: [
    CommonModule,
    NotesModule,
    InfuziaRoutingModule,
    MoreinformationsModule
  ],
  exports: [InfuziaComponent]
})
export class InfuziaModule { }
