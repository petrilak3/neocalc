import { ItemMkchService } from './../../../services/item-mkch.service';
import { InfoPanelMKCH, AllInfoPanelsMKCH } from './../../../models/item';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mkch',
  templateUrl: './mkch.component.html',
  styleUrls: ['./mkch.component.scss']
})
export class MkchComponent implements OnInit {
  allItems: InfoPanelMKCH[] = [];
  isLoading:boolean = true; 
  search:string = "";

  forP:boolean = true;
  forQ:boolean = false;

  constructor(private itemService: ItemMkchService) { }

  ngOnInit(): void {
    let allItemsFromDB = this.itemService.getItems();
 
    allItemsFromDB.subscribe(block => {
      this.allItems = block.all.sort((o1,o2) => {
        if(o1.header > o2.header) return 1;
        else if(o1.header < o2.header) return -1;
        return 0; 
      });
      this.isLoading = false;
    });
  }

  searchValue(searchValue:string) {
    this.search = searchValue.toLowerCase();
  }

  switchP() {
    this.forP = true;
    this.forQ = false;
  }
  switchQ() {
    this.forP = false;
    this.forQ = true;
  }

}
