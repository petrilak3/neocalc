import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Graphs } from '../models/graph';

@Injectable({
  providedIn: 'root'
})
export class ItemKrivkyService { 
  private items: Observable<Graphs>; 

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection<Graphs[]>('rastkrivky').doc<Graphs>('rastKrivkyAll').valueChanges();
  }

  getItems() {
    return this.items;
  }
}
