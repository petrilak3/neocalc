import { AllInfoPanelsMKCH } from './../models/item';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemMkchService {
  private items: Observable<AllInfoPanelsMKCH>; 

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection<AllInfoPanelsMKCH[]>('mkch').doc<AllInfoPanelsMKCH>('mkchAll').valueChanges();
  }

  getItems() {
    return this.items;
  } 
}
