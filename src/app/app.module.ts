import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BerandaComponent } from './admin/beranda/beranda.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BerandaComponent,
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
