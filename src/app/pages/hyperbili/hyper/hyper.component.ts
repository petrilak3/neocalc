import { GraphCalculatorService } from './../../../services/calculator/graph-calculator.service';
import { AllSeries } from './../../../models/graph';
import { ItemHyperService } from './../../../services/item-hyper.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyper',
  templateUrl: './hyper.component.html',
  styleUrls: ['./hyper.component.scss']
})
export class HyperComponent implements OnInit {
  graphs: Map<AllSeries,any> = new Map();
  listValues:Map<string,Map<number,number[]>> = new Map();

  normoGraphs: Map<AllSeries,any> = new Map();
  normoListValues:Map<string,Map<number,number[]>> = new Map();

  constructor(private itemService:ItemHyperService, private calc:GraphCalculatorService) { } 

  ngOnInit(): void {
    let allItemsFromDB = this.itemService.getItems();

    allItemsFromDB.subscribe(block => {
      block.all.forEach(graph => {

        const graphOption = {
          tooltip: { trigger: 'axis',axisPointer: { type: 'cross',label: { backgroundColor: '#6a7985' } } },
          legend: { data: graph.legend },
          grid: { left: '3%',right: '4%',bottom: '3%',containLabel: true },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: graph.data
            }
          ],
          yAxis: [
            {
              type: 'value',
              data: [graph.name]
            }
          ],
          series: graph.series
      };
        this.saveGraphOptions(graph,graphOption);
      })
    });
  }

  private saveGraphOptions(graph:AllSeries,option) {
    if(graph.name.startsWith("Normogram")) {
      this.normoGraphs.set(graph,option);
      this.normoListValues[graph.name] = this.buildCalculationListOfValues(graph);
    }
    else {
      this.graphs.set(graph,option);
      this.listValues[graph.name] = this.buildCalculationListOfValues(graph);
    }
  }

  private buildCalculationListOfValues(graph:AllSeries) {
    let result:Map<number,number[]> = new Map();   

    let index = 0;
    graph.data.forEach(xData => {
      let datas:number[] = [];

      graph.series.forEach(serieOfxData => {        
        datas.push(serieOfxData.data[index]);
      })

      result[xData] = datas;
      index++;
    })

    return result;
  }

  evaluation(graph:AllSeries, dateInput:string, timeInput:string, dateOut:string, timeOut:string, result:HTMLParagraphElement) {
    const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\.\-](0?[1-9]|1[012])[\.\-]\d{4}$/;
    const regexTime = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    if(dateInput == "" || timeInput == "" || dateOut == "" || timeOut == "") {
      result.innerHTML = "Zle zadané údaje";
      return;
    } 

    if(!regexDate.test(dateInput) || !regexDate.test(dateOut)) {
      result.innerHTML = "Nesprávny formát dátumu - DD.MM.RRRR";
      return;
    }
    if(!regexTime.test(timeInput) || !regexTime.test(timeOut)) {
      result.innerHTML = "Nesprávny formát času - HH:MM";
      return;
    }

    const birthTimestampString = dateInput.split(".").reverse().join("-") + " " + timeInput;
    const birthTimestamp = new Date(birthTimestampString);
    const outTimestampString = dateOut.split(".").reverse().join("-") + " " + timeOut;
    const outTimestamp = new Date(outTimestampString);

    if(outTimestamp.getTime() < birthTimestamp.getTime()) {
      result.innerHTML = "Zle zadané údaje. Vek dieťaťa je definovaný po dátume odberu...";
      return;
    }

    const timeInHours = (outTimestamp.getTime() - birthTimestamp.getTime()) / 36e5;

    result.innerHTML = this.calc.calculateResultIndication(graph,this.listValues[graph.name],timeInHours);
  }

  calculateMgdl(umol:HTMLInputElement,mgdl:HTMLInputElement) {
    mgdl.value = (Number(umol.value)/17.1).toFixed(3);
  }

  calculateUmol(umol:HTMLInputElement,mgdl:HTMLInputElement) {
    umol.value = (Number(mgdl.value)*17.1).toFixed(3);
  }
}
