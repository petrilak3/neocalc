import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyper-indications',
  templateUrl: './hyper-indications.component.html',
  styleUrls: ['./hyper-indications.component.scss']
})
export class HyperIndicationsComponent implements OnInit {

  resultsOnDaysFoto:any[] = [
    {bili:"85-102 μmol/l", info:"<28 0/7"},
    {bili:"102-136 μmol/l", info:"28 0/7 – 29 6/7"},
    {bili:"136-171 μmol/l", info:"30 0/7 – 31 6/7"},
    {bili:"171-205 μmol/l", info:"32 0/7 – 33 6/7"},
    {bili:"205-239 μmol/l", info:"34 0/7 – 34 6/7"}
  ];
  resultsOnDaysExsang:any[] = [
    {bili:"188-239 μmol/l", info:"<28 0/7"},
    {bili:"205-239 μmol/l", info:"28 0/7 – 29 6/7"},
    {bili:"222-237 μmol/l", info:"30 0/7 – 31 6/7"},
    {bili:"256-308 μmol/l", info:"32 0/7 – 33 6/7"},
    {bili:"290-325 μmol/l", info:"34 0/7 – 34 6/7"}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
