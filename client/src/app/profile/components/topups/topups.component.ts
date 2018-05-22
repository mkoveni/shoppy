import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { select } from 'ng2-redux';
import 'rxjs/add/operator/single';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../../store/auth/store';
import { MessageService } from '../../../services/message.service';


@Component({
  selector: 'app-topups',
  templateUrl: './topups.component.html',
  styleUrls: ['./topups.component.css']
})
export class TopupsComponent extends BaseComponent implements OnInit {

  @select(s => s.auth.user) user;

  authUser = new BehaviorSubject<User>(null);

  type: {};

  constructor(builder: FormBuilder, private transactService: TransactionService,
      private message: MessageService) {
    super(builder);
   }

  ngOnInit() {

    this.initialForm();

    this.user.subscribe(user => this.authUser.next(user));

    this.transactService.getTopupType().subscribe(res => this.type = res);
  }

  submit() {

    this.transactService.topup(this.input('amount'), this.type['id'], this.authUser.getValue().id)
      .subscribe(res => {
        // dispatch an action to reduce the user's credit amount
        this.transactService.topupUserCredit(res['data']['amount']);

        // toast a message
        this.message.success('Hooray!', 'your transaction was successfully...');

        // reset the input field
        this.form.reset();

      }, error => this.message.error('Error', 'Something went wrong, we could not process your transaction...'));
  }

  getFields() {
    return {
      amount: [null, [Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
    }
  }



}
