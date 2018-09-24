import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../core/services/login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
