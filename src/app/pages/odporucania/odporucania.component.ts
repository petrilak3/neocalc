import { ItemOdporucaniaService } from './../../services/item-odporucania.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllInfoPanels, InfoPanel } from 'src/app/models/item';

@Component({
  selector: 'app-odporucania',
  templateUrl: './odporucania.component.html',
  styleUrls: ['./odporucania.component.scss']
})
export class OdporucaniaComponent implements OnInit {
  allItems: InfoPanel[]; 
  sources: string[];
  search:string = "";

  constructor(private itemService: ItemOdporucaniaService) { }

  ngOnInit(): void {
    this.allItems = [];
    let allItemsFromDB = this.itemService.getItems();
 
    allItemsFromDB.subscribe(block => {
      this.allItems = block.all.sort((o1,o2) => {
        if(o1.name > o2.name) return 1;
        else if(o1.name < o2.name) return -1;
        return 0;
      });
      this.sources = block.sources;
    });
  }

  searchValue(searchValue:string) {
    this.search = searchValue.toLowerCase();
  }

}
