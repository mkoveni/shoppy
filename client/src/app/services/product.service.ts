import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { ALL_PRODUCTS } from '../routes/routes';
@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts() {
      return this.http.get(ALL_PRODUCTS)
          .map(res => res.json().data);
  }
}
