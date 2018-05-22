import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';

@Component({
  selector: 'app-purchase--history',
  templateUrl: './purchase--history.component.html',
  styleUrls: ['./purchase--history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  transactions = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {

    this.transactionService.getPurchaseType().subscribe(type => {

      this.transactionService.getForType(type['id']).subscribe(res => this.transactions = res);
    });
  }

}
