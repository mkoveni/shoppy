import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../../../services/transaction.service';
import { select } from 'ng2-redux';
import 'rxjs/add/operator/single';


@Component({
  selector: 'app-topups',
  templateUrl: './topups.component.html',
  styleUrls: ['./topups.component.css']
})
export class TopupsComponent extends BaseComponent implements OnInit {

  @select(s => s.auth.user) user;

  type: {};

  constructor(builder: FormBuilder, private transactService: TransactionService) {
    super(builder);
   }

  ngOnInit() {

    this.transactService.getTopupType().subscribe(res => {
      this.type = res;
        console.log(this.type);
    });
  }

  submit() {

    this.transactService.topup(this.input('amount'), this.type['id'], this.user.single().id)
      .subscribe(res => console.log(res));
  }

  getFields() {
    return {
      amount: [null, [Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]]
    }
  }



}
