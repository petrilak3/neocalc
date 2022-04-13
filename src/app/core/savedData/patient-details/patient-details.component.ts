import { LogcheckService } from 'src/app/services/logcheck.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data, Item, Patient } from 'src/app/models/item';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html', 
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  @Input() patient:Patient;
  @Output() newItemEvent = new EventEmitter<boolean>();
  patientDatas:Data[];
  vypocet:Map<Item,Map<string,string>>[] = [];


  constructor(private calc:CalculatorService, private user:LogcheckService) { }

  ngOnInit(): void {
    this.buildResultCalculation();
  }

  private getUpdatedPatient() {
    return new Promise<void>((resolve, reject) => {
      this.user.getItemSaved().allPatients.forEach(pat => {
        if(this.patient.name == pat.name) {
          this.patient = pat;
        }
      });resolve();
    })
  }

  private buildResultCalculation() {
    this.vypocet = [];
    
    this.patientDatas = this.patient.saved;
    this.patientDatas.forEach(data => {
      const addMap:Map<Item,Map<string,string>> = new Map();
      addMap.set(data.item,JSON.parse(data.dataInputs)); 

      this.vypocet.push(addMap);
    });
  }

  calculate(item:Item,inputs:Map<string,string>,infoResult:HTMLParagraphElement,btn:HTMLButtonElement) {
    if(btn.innerHTML == "zobraziť výsledok") {
      btn.innerHTML = "skryť výsledok";
      infoResult.innerHTML = this.calc.evaluation(inputs,item);
    }
    else {
      btn.innerHTML = "zobraziť výsledok"
      infoResult.innerHTML = ""
    }
  }

  showData(dataBox:HTMLDivElement,btn:HTMLButtonElement) {
    if(btn.innerHTML == "zobraziť výpočet") {
      btn.innerHTML = "skryť výpočet";
      dataBox.hidden = false;
    }
    else {
      btn.innerHTML = "zobraziť výpočet"
      dataBox.hidden = true;
    }
  }

  removeItem(btn:HTMLButtonElement,indexData:number) { 
    this.user.deleteDataToPatient(this.patient.name,this.patientDatas[indexData]).then(() => {
      this.getUpdatedPatient()
    }).catch(e => Materialize.toast("Položku sa nepodarilo odstrániť...",2000)).then(() => {
      this.buildResultCalculation();
      btn.disabled = true;
      Materialize.toast("Položka bola odstránená zo zoznamu",2000);
  });
  }

  close() {
    this.newItemEvent.emit(false);
  }

}
