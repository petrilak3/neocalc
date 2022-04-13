import { CalculatorService } from '../../../../../services/calculator/calculator.service';
import { ItemService } from 'src/app/services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems: Item[]; 
  inputValues = new Map();
  isLoading:boolean = true;
  moreInfoItem:Item = null;
  search:string = "";

  constructor(private itemService: ItemService,private calc:CalculatorService) { 
   }

  ngOnInit(): void {
    $('.collapsible').collapsible();
      
    let allItemsFromDB = this.itemService.getItems();

    allItemsFromDB.subscribe(block => {
      this.allItems = block.all.sort((o1,o2) => {
        if(o1.name > o2.name) return 1;
        else if(o1.name < o2.name) return -1;
        return 0;
      });
      this.isLoading = false; 
    }); 
  }

  searchValue(searchValue:string) {
    this.search = searchValue.toLowerCase();
  }

  evaluation(itemInput: Item,fieldAndId:string, resultParagraph:HTMLParagraphElement, inputField:HTMLInputElement) {
    this.inputValues[fieldAndId] = inputField.value.toString();
    resultParagraph.innerHTML = this.calc.evaluation(this.inputValues,itemInput);
  }

  closeItem(close:Item) {
    this.moreInfoItem = close;
  }

  openItem(item:Item) {
    this.moreInfoItem = item;
  }
}
