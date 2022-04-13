import { MoreinformationsModule } from 'src/app/core/informations/moreinformations.module';
import { TableComponent } from './td-list/components/table/table.component';
import { TdListComponent } from './td-list/td-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './td-list/components/items/items.component';
import { ItemService } from 'src/app/services/item.service'
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [TdListComponent,ItemsComponent,TableComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MoreinformationsModule
  ], 
  exports: [TdListComponent],
  providers: [ItemService]
})
export class DashboardModule { }
