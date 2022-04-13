import { LogcheckService } from 'src/app/services/logcheck.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, Note } from 'src/app/models/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-notes',
  templateUrl: './item-notes.component.html',
  styleUrls: ['./item-notes.component.scss']
}) 
export class ItemNotesComponent implements OnInit {
  notes:Observable<Note[]>;
  @Input() item:Item;
  @Input() group:string;
  @Output() newItemEvent = new EventEmitter<Item>();
  showAddNote:boolean = false;
  userIsLoggedIn:Boolean;

  constructor(private user:LogcheckService) { 
    this.notes = user.getItemList();
  }

  ngOnInit(): void {
    if(this.user.getUser() != null) {
      this.userIsLoggedIn = true;
    }
    else {
      this.userIsLoggedIn = false;
    }
  }

  addNote(header:string,text:string) {
    const newNote:Note = {
      header: header,
      text: text,
      forItemId:this.item.id,
      forGroup:this.group
    }

    this.user.createNote(newNote).catch(e => Materialize.toast("Poznámku sa nepodarilo uložiť...",2000)).then(() => {
      Materialize.toast("Poznámka bola uložená...",2000);
    });
  } 

  dataChangedAlert(infoParagraph:HTMLParagraphElement) {
    infoParagraph.innerHTML = "Zmeny neboli uložené...";
  }

  deleteNote(note: Note) { 
    this.user.deleteNote(note).catch(e => Materialize.toast("Poznámku sa nepodarilo odstrániť...",2000)).then(() => {
      Materialize.toast("Poznámka bola odstránená...",2000);
    });
  }

  updateNote(note:Note, newText:string) {
    this.user.updateSpecificNote(note,newText).catch(e => Materialize.toast("Poznámku sa nepodarilo aktualizovať...",2000)).then(() => {
      Materialize.toast("Poznámka bola aktualizovaná...",2000);
    });
  }

  closeNotes() {
    this.newItemEvent.emit(null);
  }

  abcBold() {document.execCommand('bold');}
  abcItalic() {document.execCommand('italic');}
  abcUnderline() {document.execCommand('underline');}
  abcBlack() {document.execCommand('foreColor', false, "rgba(0,0,0,1)");}
  abcRed() {document.execCommand('foreColor', false, "rgba(255,0,0,1)");}
  abcGreen() {document.execCommand('foreColor', false, "rgba(0,255,0,1)");}

}
