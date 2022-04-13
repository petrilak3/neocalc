import { Component, OnInit } from '@angular/core';
import { redcodeTableDrugs, redcodeTableKanyle } from 'src/app/models/data';

@Component({
  selector: 'app-redcode',
  templateUrl: './redcode.component.html', 
  styleUrls: ['./redcode.component.scss']
})
export class RedcodeComponent implements OnInit {
  table:any[];
  tableDrugs:any[];

  constructor() { }

  ngOnInit(): void { 
    this.table = redcodeTableKanyle;
    this.tableDrugs = redcodeTableDrugs;
  }

  calculateIntub(weight:number,result:HTMLParagraphElement) {
    let message:string = "";

    for (let i = this.table.length-1; i >= 0; i--) {
      const row = this.table[i];
      if((weight*1000) >= row.weight) {
        message += "Pre hmotnosť "+weight.toString()+" kg:<br>Hĺbka zavedenia kanyly - nazotracheálne: ";
        message += row.nazo.toString()+" cm<br>Hĺbka zavedenia kanyly - orotracheálne: "+row.oro.toString();
        message += " cm<br>Hrúbka kanyly: "+row.kanyle.toString()+" mm";
        result.innerHTML = message;
        return;
      }
    }
  }

  calculateDrugs(weight:number) {
    this.tableDrugs.forEach(drug => {
      drug.resultMg = (weight*drug.davkaFrom).toFixed(2).toString();
      if(drug.davkaTo != null)  drug.resultMg += " - " + (weight*drug.davkaTo).toFixed(2).toString();
      drug.resultMg += " " + drug.davkaValue;

      if(drug.resMlIndication != null) {
        drug.resultMl = ((weight*drug.davkaFrom)/drug.resMlIndication).toFixed(2).toString();
        if(drug.davkaTo != null && drug.resMlIndication != null) drug.resultMl += " - " + ((weight*drug.davkaTo)/drug.resMlIndication).toFixed(2).toString()
        drug.resultMl += " ml";
      }
      else drug.resultMl = drug.resultMg;
    })


  }

}
