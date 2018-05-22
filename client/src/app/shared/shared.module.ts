import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticatedGuard, GuestGuard } from '../guards/guards';

import { ToastyModule } from 'ng2-toasty';
import { MessageService } from '../services/message.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToastyModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ToastyModule
  ],
  providers: [AuthenticatedGuard, GuestGuard, MessageService]
})
export class SharedModule { }
