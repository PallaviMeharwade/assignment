import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Assgn2Component } from './home/assgn2/assgn2.component';
import { Assgn3Component } from './home/assgn3/assgn3.component';
import { Assgn4Component } from './home/assgn4/assgn4.component';


const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'assgn2', component:Assgn2Component},
  {path: 'assgn3', component:Assgn3Component},
  {path: 'assgn4', component:Assgn4Component},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
