import { Component, OnInit } from '@angular/core';
import { energyTableContent, energyTableContentValues } from 'src/app/models/data';
import { TableRow } from 'src/app/models/item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'] 
}) 
 
export class TableComponent implements OnInit {
  table: TableRow[];
  tableValues: Map<string,TableRow>;
  energy = 0;carbo = 0;fat = 0;protein = 0;ca = 0;ph = 0;fe = 0;

  constructor() { }

  ngOnInit(): void {
    $('.collapsible').collapsible();
    this.table = energyTableContent;
    this.tableValues = new Map(energyTableContentValues);
  }

  onInput(input:string,valItem:TableRow) {
    let val = this.tableValues.get(valItem.type);
    let inputValue = 0;

    if(input != "") {
      if(val.val == "Počet sáčkov") {
        inputValue = Number(input);
      }
      else {
        inputValue = Number(input) / 100;
      }
    }
    
    val.energy = (valItem.energy * inputValue);
    val.carbo = (valItem.carbo * inputValue);
    val.fat = (valItem.fat * inputValue);
    val.protein = (valItem.protein * inputValue);
    val.ca = (valItem.ca * inputValue);
    val.ph = (valItem.ph * inputValue);
    val.fe = (valItem.fe * inputValue);

    this.calculation();
  }

  private calculation() {
    this.energy = 0,this.carbo = 0,this.fat = 0,this.protein = 0,this.ca = 0,this.ph = 0,this.fe = 0;
    this.tableValues.forEach((value:TableRow,key:string) => {
      this.energy += value.energy;
      this.carbo += value.carbo;
      this.fat += value.fat;
      this.protein += value.protein;
      this.ca += value.ca;
      this.ph += value.ph;
      this.fe += value.fe; 
    });
  }   
}
