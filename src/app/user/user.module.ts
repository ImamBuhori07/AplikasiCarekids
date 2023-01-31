import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BerandaComponent } from './beranda/beranda.component';


@NgModule({
  declarations: [BerandaComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
