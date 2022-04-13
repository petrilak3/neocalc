import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { All, Item } from 'src/app/models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Observable<All>; 

  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection<All[]>('vypocty').doc<All>('vypoctyAll').valueChanges();
  }

  getItems() {
    return this.items;
  } 
}
