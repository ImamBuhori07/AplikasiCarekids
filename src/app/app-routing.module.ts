import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './admin/beranda/beranda.component';
import { LoginComponent } from './admin/login/login.component';


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
