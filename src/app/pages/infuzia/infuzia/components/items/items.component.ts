import { LogcheckService } from 'src/app/services/logcheck.service';
import { CalculatorService } from './../../../../../services/calculator/calculator.service';
import { ItemInfuzieService } from './../../../../../services/item-infuzie.service';
import { Component, OnInit } from '@angular/core';
import { Data, Item, Patient } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
}) 
export class ItemsComponent implements OnInit {
  allItems: Item[];
  inputValues:Map<string,string> = new Map();
  isLoading:boolean = true;
  search:string = "";
  moreInfoItem:Item = null;
  notesForItem:Item = null; 
  group:string = "infuzie";

  patients:Patient[] = [];

  constructor(private itemService: ItemInfuzieService, private calc:CalculatorService, private user:LogcheckService) { }

  ngOnInit(): void {
    $('.collapsible').collapsible();
    $('.collapsible .collapsible').collapsible();
    $(document).ready(function(){
      $('.tooltipped').tooltip();
    });

    let allItemsFromDB = this.itemService.getItems();

    allItemsFromDB.subscribe(block => {
      this.allItems = block.all.sort((o1,o2) => {
        if(o1.name > o2.name) return 1;
        else if(o1.name < o2.name) return -1;
        return 0;
      });
      this.isLoading = false; 
    });

    let allPatientsFromDB = this.user.getItemSaved();
    this.patients = allPatientsFromDB.allPatients;
  }

  autofill(itemInput: Item) {
    if(itemInput.fill) {
      Object.keys(itemInput.fill).forEach(key => {
        let inputField = document.getElementById(key) as HTMLInputElement;
        inputField.value = itemInput.fill[key];
        this.evaluation(itemInput,key,null,inputField);
      })
    }
  }

  searchValue(searchValue:string) {
    this.search = searchValue.toLowerCase();
  }

  evaluation(itemInput: Item,fieldAndId:string,resultParagraph:HTMLParagraphElement, inputField:HTMLInputElement) {
    this.inputValues[fieldAndId] = inputField.value.toString();
    if(resultParagraph != null) resultParagraph.innerHTML = this.calc.evaluation(this.inputValues,itemInput);
  }
  
  closeItem(close:Item) {
    this.moreInfoItem = close;
  }

  closeNotes(close:Item) {
    this.notesForItem = close;
  }

  openItem(item:Item) {
    this.closeNotes(null);
    this.moreInfoItem = item;
  }

  openItemNotes(item:Item) {
    this.closeItem(null); 
    this.notesForItem = item;
  }

  showPatients() {
    let allPatientsFromDB = this.user.getItemSaved();
    this.patients = allPatientsFromDB.allPatients;
    if(this.patients.length == 0) Materialize.toast("Nemáte vytvorených žiadnych pacientov...",2000);
  }

  createSavedData(itemInput: Item,patient:Patient,btn:HTMLButtonElement) {
    const dataToAdd:Data = {
      item:itemInput,
      dataInputs:JSON.stringify(this.inputValues)
    };

    this.saveDataToDB(patient.name,dataToAdd,btn);
  }

  private saveDataToDB(name:string,data:Data,btn:HTMLButtonElement) {
    this.user.addDataToPatient(name,data).then(() => {
      Materialize.toast("Výpočet bol uložený",2000);
      btn.innerHTML = "Uložené - "+ name;
      btn.disabled = true;
      this.inputValues.clear(); 
    });
  }
}
