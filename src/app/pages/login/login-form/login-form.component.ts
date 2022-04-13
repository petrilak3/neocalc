import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LogcheckService } from 'src/app/services/logcheck.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router, private logcheck: LogcheckService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  login() {
    let information : string = "";
    const {email, password} = this.loginForm.value;
    this.auth.signInWithEmailAndPassword(email, password).then(() => this.logcheck.checkState()).then(() =>
      this.router.navigate([''])
    ).catch(function(error) {
      information = "Nepodarilo sa prihlásiť. Nesprávny email alebo heslo!";
    }).finally(() => this.message = information);
  }

  resetPassword() {
    const {email, password} = this.loginForm.value;
    let information : string = "";
    this.auth.sendPasswordResetEmail(email).then(function() {
      information = "Email s odkazom na obnovu hesla bol odoslaný. Prosím skontorujte si Vašu emailovú schránku";
    }).catch(function(error) {
      information = "Email s odkazom na obnovu hesla sa nepodarilo odoslať. Prosím skontrolujte, či ste zadali správne emailovú adresu.";
    }).finally(() => this.message = information);

  }     
}
