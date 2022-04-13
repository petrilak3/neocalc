import { GraphCalculatorService } from './../../../services/calculator/graph-calculator.service';
import { ItemKrivkyService } from './../../../services/item-krivky.service';
import { AllSeries, Graphs } from './../../../models/graph';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-krivky',
  templateUrl: './krivky.component.html',
  styleUrls: ['./krivky.component.scss']
})
export class KrivkyComponent implements OnInit {
  isLoading = false; 
  graphs: Map<AllSeries,any> = new Map();
  listValues:Map<string,Map<string,number[]>> = new Map();
  sources:string[];
  forBoys:boolean = false;
  forGirls:boolean = false;
  
  constructor(private itemService: ItemKrivkyService,private calc:GraphCalculatorService) {}

  ngOnInit(): void {let allItemsFromDB = this.itemService.getItems();

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
      this.graphs.set(graph,option);
      this.listValues[graph.name] = this.buildCalculationListOfValues(graph);
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

  evaluation(graphName:string, gestWeekInput:string, valueInput:string, result:HTMLParagraphElement) {
    result.innerHTML = this.calc.calculateResultRastKrivky(this.listValues[graphName],gestWeekInput,valueInput);
  }

  switchBoys() {
    this.forBoys = !this.forBoys;
  }

  switchGirls() {
    this.forGirls = !this.forGirls;
  }
}
