import { CalculatorService } from './../../../../../services/calculator/calculator.service';
import { ItemLiekyService } from './../../../../../services/item-lieky.service';
import { Component, OnInit } from '@angular/core';
import { All, Data, Item, Patient } from 'src/app/models/item';
import { Observable } from 'rxjs';
import { LogcheckService } from 'src/app/services/logcheck.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  allItems: Item[] = [];
  inputValues = new Map();

  isLoading: boolean = true;
  search:string = "";
  notesForItem:Item = null;
  group:string = "lieky";

  private patients:Patient[] = [];

  constructor(private itemService: ItemLiekyService, private calc:CalculatorService, private user:LogcheckService) { 
  }

  ngOnInit(): void {  
    $('.collapsible').collapsible(); 
    
    let allItemsFromDB: Observable<All> = this.itemService.getItems();

    allItemsFromDB.subscribe(item => {
      this.allItems = item.all.sort((o1,o2) => {
        if(o1.name > o2.name) return 1;
        else if(o1.name < o2.name) return -1;
        return 0;
      });
      this.isLoading = false; 
    });

    this.refreshPatients();
  } 

  private refreshPatients() {
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
 
  searchValue(searchString:string) { 
    this.search = searchString.toLowerCase();
  }

  evaluation(itemInput: Item,fieldAndId:string,resultParagraph:HTMLParagraphElement, inputField:HTMLInputElement) {
    this.inputValues[fieldAndId] = inputField.value.toString();
    if(resultParagraph != null) resultParagraph.innerHTML = this.calc.evaluation(this.inputValues,itemInput);
  }

  closeNotes(close:Item) {
    this.notesForItem = close;
  }

  openItemNotes(item:Item) {
    this.notesForItem = item;
  } 

  showPatients() {
    this.refreshPatients();
    if(this.patients.length == 0) Materialize.toast("Nemáte vytvorených žiadnych pacientov...",2000);
  }

  saveData(itemInput: Item,patient:Patient,btn:HTMLButtonElement) {
    const dataToAdd:Data = {
      item:itemInput,
      dataInputs:JSON.stringify(this.inputValues)
    };

    this.uploadToDatabase(patient,dataToAdd,btn);
  }

  private uploadToDatabase(patient:Patient,dataToAdd:Data,btn:HTMLButtonElement) {
    this.user.addDataToPatient(patient.name,dataToAdd).catch(() => {
      Materialize.toast("Výpočet sa nepodarilo uložiť",2000);return;
    }).then(() => {
      Materialize.toast("Výpočet bol uložený",2000);
      btn.innerHTML = "Uložené - "+patient.name;
      btn.disabled = true;
      this.inputValues.clear();
    });
  }
}
 