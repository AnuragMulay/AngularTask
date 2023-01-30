import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerComponent } from './register/registerComponent'
import { loginComponent } from './login/loginComponent';
import { addCComponent } from './addContacts/addCComponent';
import { dRComponent } from './dashboardRoute/dRComponent';
import { searchCComponent } from './searchContacts/searchCComponent';
import { showCComponent } from './ShowContacts/showCComponent';
import { dbComponent } from './dashboard/dashboardComponent';
import { changePass } from './changePassword/changePasswordComponent';

const routes: Routes = [
  { path:'', redirectTo:'login',pathMatch:'full'},
  { path:'register',component:registerComponent},
  { path:'login',component:loginComponent }, 
  { path:'dashboard',component:dbComponent},
  { path:'dashboardR',component:dRComponent},
  { path:'addContacts',component:addCComponent},
  { path:'searchContacts',component:searchCComponent},
  { path:'showContacts',component:showCComponent},
  { path:'changePass',component:changePass},
]

// const routes: Routes = [
//   { path:'', redirectTo:'login',pathMatch:'full'},
//   { path:'register',component:registerComponent},
//   { path:'login',component:loginComponent, 
//   children : [
//     { path:'dashboard',component:dbComponent},
//     { path:'dashboardR',component:dRComponent},
//     { path:'addContacts',component:addCComponent},
//     { path:'searchContacts',component:searchCComponent},
//     { path:'showContacts',component:showCComponent},
//     { path:'changePass',component:changePass},
//   ]}
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
