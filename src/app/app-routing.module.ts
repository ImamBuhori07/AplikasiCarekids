import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './admin/beranda/beranda.component';
import { BeritaComponent } from './admin/berita/berita.component';
import { DaftarKehilanganComponent } from './admin/daftar-kehilangan/daftar-kehilangan.component';
import { EdukasiComponent } from './admin/edukasi/edukasi.component';
import { LoginComponent } from './admin/login/login.component';
import { PesanComponent } from './admin/pesan/pesan.component';


const routes: Routes = [
 {
  path:"",
  component:LoginComponent
},

{
  path:"Beranda",
  component:BerandaComponent
},

{
  path:"Berita",
  component:BeritaComponent
},

{
  path:"DaftarKehilanganAnak",
  component:DaftarKehilanganComponent
},

{
  path:"Edukasi",
  component:EdukasiComponent
},

{
  path:"Pesan",
  component:PesanComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
