import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AllInfoPanels } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemOdporucaniaService {
  private items: Observable<AllInfoPanels>; 

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection<AllInfoPanels[]>('odporucania').doc<AllInfoPanels>('odporucaniaAll').valueChanges();
  }

  getItems() {
    return this.items;
  } 
}
