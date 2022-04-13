import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/item';
import { LogcheckService } from 'src/app/services/logcheck.service';

@Component({
  selector: 'app-saved-data',
  templateUrl: './saved-data.component.html',
  styleUrls: ['./saved-data.component.scss']
})
export class SavedDataComponent implements OnInit {
  allItemsDB: Patient[] = [];
  patientZoom:boolean = false;
  selectedPatient:Patient = null;

  constructor(private user:LogcheckService) { }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    let allItemsDbPatients = this.user.getItemSaved();
    if(allItemsDbPatients != undefined) this.allItemsDB = allItemsDbPatients.allPatients;
  }

  createPatient(inputBox:HTMLInputElement) {
    const patient:Patient = {
      name:inputBox.value,
      saved:[]
    }
    this.user.createPatient(patient).then(() => {
      Materialize.toast("Pacient bol vytvorený",2000);
      inputBox.value = "";this.refresh();}).catch(() => Materialize.toast("Presiahli ste maximálny počet uložení pacientov [6]",2000));
  }

  openPatient(patient:Patient) {
    this.patientZoom = true;
    this.selectedPatient = patient;
  }

  validateLength(boxPatient:HTMLInputElement) {
    if(boxPatient.value.length > 20) {
      boxPatient.value = boxPatient.value.substring(0,20);
      Materialize.toast("Presiahli ste maximálny počet znakov v názve pacienta! [20]",2000);
    }
  }

  deletePatient(patient:Patient) {
    this.user.deletePatient(patient).catch(e => Materialize.toast("Pacienta sa nepodarilo odstrániť",2000)).then(() => {
      this.refresh();
      Materialize.toast("Pacient bol odstránený",2000);
    });
  }

  close(close:boolean) {
    this.patientZoom = close;
  }
}
