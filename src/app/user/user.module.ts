import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import {RouterModule,Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([
      {path:'sign-up',component:SignupComponent}
    ])
  ],
  declarations: [SignupComponent, LoginComponent]
})
export class UserModule { }
