import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { select } from 'ng2-redux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  @select(s => s.auth.authenticated) authenticated;
  @select(s => s.auth.user) user;

  constructor(private auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
