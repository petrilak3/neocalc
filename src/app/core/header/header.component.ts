import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { externalLinks } from 'src/app/models/data';
import { Note } from 'src/app/models/item';
import { LogcheckService } from 'src/app/services/logcheck.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {
  user:firebase.User = null;
  items: Observable<Note[]>;
  searchNotes:string = "";
  externalLinks: Map<string,string>;

  constructor(private auth: AngularFireAuth,private router: Router,private logcheck: LogcheckService) { 
  }

  ngAfterViewInit(): void { 
  }

  ngOnInit(): void {
    $('.button-collapse').sideNav();
    $(document).ready(function(){
      $('.modal').modal();
      $('.tooltipped').tooltip();
    });

    this.auth.onAuthStateChanged(userN => {
      if (userN) this.user = userN;
      else this.user = null;
    });

    this.externalLinks = externalLinks;
  }

  searchValue(search:string) {
    this.searchNotes = search.toLowerCase();
  }

  logout() {
    this.auth.signOut().then(() => {
      this.logcheck.getUser().then(user => this.user = user)
    }).finally(() => {this.router.navigate(['login']);});  
  }

  loadNotes() {
    this.items = this.logcheck.getItemList();
  }

  addNote(headerInput:HTMLInputElement, textInput:HTMLDivElement) {
    const newNote:Note = {
      header: headerInput.value,
      text: textInput.innerHTML
    }
    this.logcheck.createNote(newNote).catch(e => Materialize.toast("Poznámku sa nepodarilo uložiť...",2000)).then(() => {
      Materialize.toast("Poznámka bola uložená...",2000);
    });

    headerInput.value = "";
    textInput.innerHTML = "";
  } 

  dataChangedAlert(infoParagraph:HTMLParagraphElement) {
    infoParagraph.innerHTML = "Zmeny neboli uložené...";
  }

  deleteNote(note: Note) { 
    this.logcheck.deleteNote(note).catch(e => Materialize.toast("Poznámku sa nepodarilo odstrániť...",2000)).then(() => {
      Materialize.toast("Poznámka bola odstránená...",2000);
    });
  }

  updateNote(note:Note, newText:string) {
    this.logcheck.updateNote(note,newText).catch(e => Materialize.toast("Poznámku sa nepodarilo aktualizovať...",2000)).then(() => {
      Materialize.toast("Poznámka bola aktualizovaná...",2000);
    });
  }

  updateUserName(newUserNameInput:HTMLInputElement,infoUpdateName:HTMLParagraphElement) {  
    this.logcheck.updateUserName(newUserNameInput.value).then(()=> {
      infoUpdateName.innerHTML = "Používateľské meno bolo zmenené...";newUserNameInput.value = "";})
  } 

  updateUserPassword(boxPasswordFirst:HTMLInputElement,boxPasswordSecond:HTMLInputElement,boxInfoPassword:HTMLParagraphElement) {  
    if(boxPasswordFirst.value == boxPasswordSecond.value) {
      this.logcheck.updateUserPassword(boxPasswordFirst.value);
      boxInfoPassword.innerHTML = "Heslo bolo zmenené...";
    }
    else {
      boxInfoPassword.innerHTML = "Novozadané heslá sa nezhodujú...";
    }
    boxPasswordFirst.value = "";
    boxPasswordSecond.value = "";
  }  

  abcBold() {
    document.execCommand('bold');
  }
  abcItalic() {
    document.execCommand('italic');
  }
  abcUnderline() {
    document.execCommand('underline');
  }
  abcBlack() {document.execCommand('foreColor', false, "rgba(0,0,0,1)");}
  abcRed() {document.execCommand('foreColor', false, "rgba(255,0,0,1)");}
  abcGreen() {document.execCommand('foreColor', false, "rgba(0,255,0,1)");}
  
  openWindow(url:string) {
    window.open(url,"_blank");
  }
}
