import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-topup-history',
  templateUrl: './topup-history.component.html',
  styleUrls: ['./topup-history.component.css']
})
export class TopupHistoryComponent implements OnInit {

  transactions = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {

    this.transactionService.getTopupType().subscribe(type => {

      this.transactionService.getForType(type['id']).subscribe(res => this.transactions = res);
    });


  }

}
