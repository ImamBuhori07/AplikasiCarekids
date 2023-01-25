import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { BerandaComponent } from './beranda/beranda.component';
import { BeritaComponent } from './berita/berita.component';
import { DaftarKehilanganComponent } from './daftar-kehilangan/daftar-kehilangan.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { PesanComponent } from './pesan/pesan.component';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';


@NgModule({
  declarations: [LoginComponent, BerandaComponent, BeritaComponent, DaftarKehilanganComponent, EdukasiComponent, PesanComponent, TambahpostinganComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
