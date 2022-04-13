import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData, Query, QuerySnapshot } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import { All, Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemInfuzieService {
  private items: Observable<All>; 

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection<All[]>('infuzie').doc<All>('infuzieAll').valueChanges();
  }

  getItems() { 
    return this.items;
  }

}
