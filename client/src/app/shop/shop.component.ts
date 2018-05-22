import { Product } from './../product/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class HomeComponent implements OnInit {
    @select(s => s.shop.products) products;

    ngOnInit() {

    }

}
