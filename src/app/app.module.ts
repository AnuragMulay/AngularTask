import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { loginComponent } from './login/loginComponent';
import { registerComponent } from './register/registerComponent'
import { dbComponent } from './dashboard/dashboardComponent'
import { addCComponent } from './addContacts/addCComponent';
import { dRComponent } from './dashboardRoute/dRComponent';
import { searchCComponent } from './searchContacts/searchCComponent';
import { showCComponent } from './ShowContacts/showCComponent';
import { changePass } from './changePassword/changePasswordComponent';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    registerComponent,
    dbComponent,
    dRComponent,
    addCComponent,
    searchCComponent,
    showCComponent,
    changePass
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
