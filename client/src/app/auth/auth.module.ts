import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/router';
import { AuthLoginComponent } from './components/authLogin.component';
import { AuthRegisterComponent } from './components/authRegister.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { GuestGuard } from '../guards/guards';
import 'rxjs/add/operator/single';


const authRoots: Routes = [
  {path: 'login', component: AuthLoginComponent, canActivate: [GuestGuard]},
  {path: 'register', component: AuthRegisterComponent, canActivate: [GuestGuard]}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(authRoots),
    SharedModule
  ],
  declarations: [
    AuthRegisterComponent,
    AuthLoginComponent
  ],
  providers: [AuthService],
  exports: [RouterModule, SharedModule]
})
export class AuthModule {}
