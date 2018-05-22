import { Product } from './../product/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class HomeComponent implements OnInit {
    products: Product[];
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProducts().subscribe( products => {
            this.products = products;

        });
    }

}
