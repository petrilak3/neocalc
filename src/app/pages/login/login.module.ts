import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginFormComponent,RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  exports: [LoginFormComponent, RegisterComponent]
})
export class LoginModule { }
