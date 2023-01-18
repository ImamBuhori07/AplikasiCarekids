import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:"Login",
    component:LoginComponent
  },

  {
    path:"Beranda",
    component:BerandaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
