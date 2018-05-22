import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { select } from 'ng2-redux';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User, INITIAL_USER_STATE } from '../store/auth/store';
import { INITIAL_PRODUCT_STATE } from '../store/shop/store';
import { TransactionService } from '../services/transaction.service';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @select(s => s.shop.products) products;
  @select(s => s.auth.user) authUser;

  product = new BehaviorSubject<Product>(INITIAL_PRODUCT_STATE);
  user = new BehaviorSubject<User>(INITIAL_USER_STATE);

  type: {};

  constructor(private route: ActivatedRoute, private transactionService: TransactionService,
       private message: MessageService, private router: Router) { }

  ngOnInit() {

    this.transactionService.getPurchaseType().subscribe(res => this.type = res);

    this.initialiseProduct();

    this.authUser.subscribe(user => this.user.next(user));

  }

  private initialiseProduct() {
    this.products.subscribe(products => {

      this.route.params.subscribe(params => {

        const product = products.filter(p => p.id === parseInt(params['id']))[0];

        this.product.next(product);
      });

    });
  }


  canPurchase(): Observable<boolean> {

    const canBuy = new Observable<boolean>((observer) => {

      const user = this.user.getValue();
      const product = this.product.getValue();

      if (!user || !product) {
        observer.next(false);
      } else {
        observer.next(user.credit >= (product.discount > 0 ? (product.price - product.discount) : product.price));
      }


      observer.complete();
    });

    return canBuy;
  }


  submit() {

    const user = this.user.getValue();
    const product = this.product.getValue();

    const amount = product.price - product.discount;

    this.transactionService.purchase({
      client_id: user.id,
      amount: amount,
      product_id: product.id,
      transaction_type_id: this.type['id'],
      discount: product.discount

    }).subscribe(res => {

        this.transactionService.deductUserCredit(res['data']['amount']);

        this.message.success('Hooray!', 'Your purchase was successful...');

        this.router.navigateByUrl('/profile/history/purchase');

    });

  }


}
