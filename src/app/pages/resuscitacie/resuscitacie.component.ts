import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resuscitacie',
  templateUrl: './resuscitacie.component.html',
  styleUrls: ['./resuscitacie.component.scss']
})
export class ResuscitacieComponent implements OnInit {
  showAlgorithms:boolean = false;
  showRedCode:boolean = true;

  constructor() { }
 
  ngOnInit(): void {
  }

  showAlgo() {
    this.showAlgorithms = true;
    this.showRedCode = false;
  }
  showRed() {
    this.showAlgorithms = false;
    this.showRedCode = true;
  }
}
