import { GraphCalculatorService } from './../../../../../services/calculator/graph-calculator.service';
import { Component, Input, OnInit } from '@angular/core';
import { AllSeries } from 'src/app/models/graph';

@Component({
  selector: 'app-normograms',
  templateUrl: './normograms.component.html',
  styleUrls: ['./normograms.component.scss']
})
export class NormogramsComponent implements OnInit {
  @Input() graphs: Map<AllSeries,any>;
  @Input() listValues:Map<string,Map<string,number[]>>;

  constructor(private calc:GraphCalculatorService) { }

  ngOnInit(): void {
  }

  evaluation(graph:AllSeries, dateInput:string, timeInput:string, valueInput:string, result:HTMLParagraphElement) {
    const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\.\-](0?[1-9]|1[012])[\.\-]\d{4}$/;
    const regexTime = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
      
    if(dateInput == "" || timeInput == "" || valueInput == "") {
      result.innerHTML = "Zle zadané údaje";
      return;
    } 
    if(!regexDate.test(dateInput)) {
      result.innerHTML = "Nesprávny formát dátumu - DD.MM.RRRR";
      return;
    }
    if(!regexTime.test(timeInput)) {
      result.innerHTML = "Nesprávny formát času - HH:MM";
      return;
    }

    const birthTimestampString = dateInput.split(".").reverse().join("-") + " " + timeInput;
    const birthTimestamp = new Date(birthTimestampString);
    const currentSystemTime = new Date();

    if(currentSystemTime.getTime() < birthTimestamp.getTime()) {
      result.innerHTML = "Zle zadané údaje. Vek dieťaťa je definovaný po dnešnom dátume...";
      return;
    }

    const timeInHours = (currentSystemTime.getTime() - birthTimestamp.getTime()) / 36e5;
    const valueInputNumberToMgdl = Number(valueInput) / 17.1;

    result.innerHTML = this.calc.calculateResultNormogram(graph,this.listValues[graph.name],valueInputNumberToMgdl,timeInHours);
  }

}
