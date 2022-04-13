import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { All } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemLiekyService {
  private items: Observable<All>; 

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection<All[]>('lieky').doc<All>('liekyAll').valueChanges();
  }
 
  getItems() {
    return this.items;
  }
}
