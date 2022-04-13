import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      name: new FormControl('', [Validators.required]),
    })
  }

  createUser() {
    const {email, password, name} = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password).then(user => {
      this.auth.onAuthStateChanged(usr => {
        if(usr) {
          usr.sendEmailVerification();
          usr.updateProfile({
            displayName:name
          })
        }
      }).then(() => this.router.navigate(['']))
    }).catch(function(error) {
      //information = "Nepodarilo sa registrovať. Nesprávny email alebo heslo!"; !!!!!!!!!!
    });
  }

}
