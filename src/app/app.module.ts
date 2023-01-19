import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BerandaComponent } from './admin/beranda/beranda.component';
import { BeritaComponent } from './admin/berita/berita.component';
import { DaftarKehilanganComponent } from './admin/daftar-kehilangan/daftar-kehilangan.component';
import { EdukasiComponent } from './admin/edukasi/edukasi.component';
import { PesanComponent } from './admin/pesan/pesan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BerandaComponent,
    BeritaComponent,
    DaftarKehilanganComponent,
    EdukasiComponent,
    PesanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
