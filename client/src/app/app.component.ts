import { Component, OnInit } from '@angular/core';

import {ProductService} from './services/product.service';
import { AuthService } from './services/auth.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store/store';
import { SET_PRODUCTS } from './store/shop/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService, private productService: ProductService, private store: NgRedux<IAppState>) { }

    ngOnInit() {

      this.authService.getApiUser().subscribe(response => {
        this.authService.setAuthState(true);
        this.authService.setUser(response);
      });

      this.productService.getProducts().subscribe( products => {

        this.store.dispatch({type: SET_PRODUCTS, products: products });
    });
    }
}


