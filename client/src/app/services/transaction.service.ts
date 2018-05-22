import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {PURCHASE_TYPE, TOPUP_TYPE, CREATE_TRANSACTION } from '../routes/routes';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class TransactionService {

  constructor(private http: HttpClient) { }

  getPurchaseType() {
      return this.http.get(PURCHASE_TYPE)
          .map(res => res['data']);
  }

  getTopupType() {
    return this.http.get(TOPUP_TYPE)
        .map(res => res['data']);
  }

  topup(amount, typeId, userId) {

    return this.http.post(CREATE_TRANSACTION, {
      amount: amount,
      transaction_type_id: typeId
    });
  }
}
