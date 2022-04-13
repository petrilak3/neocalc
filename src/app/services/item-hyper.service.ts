import { Graphs } from './../models/graph';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemHyperService {
  private items: Observable<Graphs>;

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection<Graphs[]>('hyperbilirubinemia').doc<Graphs>('hyperbilirubinemiaAll').valueChanges();
  }

  getItems() {
    return this.items;
  }
}
