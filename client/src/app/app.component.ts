import { Component, OnInit } from '@angular/core';

import {ProductService} from './services/product.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() {

      this.authService.getApiUser().subscribe(response => {
        this.authService.setAuthState(true);
        this.authService.setUser(response);
      });
    }
}


