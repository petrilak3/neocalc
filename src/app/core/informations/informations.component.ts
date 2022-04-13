import { Item } from '../../models/item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {
  @Input() item:Item;
  @Output() newItemEvent = new EventEmitter<Item>();

  constructor() { } 

  ngOnInit(): void {
  }

  closeItem() {
    this.newItemEvent.emit(null);
  }

}
