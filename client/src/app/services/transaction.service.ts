import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {PURCHASE_TYPE, TOPUP_TYPE, CREATE_TRANSACTION, FOR_TYPE } from '../routes/routes';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/store';
import { DEDUCT_CREDIT, TOPUP_CREDIT } from '../store/auth/actions';
@Injectable()

export class TransactionService {
  constructor(private http: HttpClient, private store: NgRedux<IAppState>) { }


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
      transaction_type_id: typeId,
      client_id: userId
    });
  }

  purchase(payload) {
    return this.http.post(CREATE_TRANSACTION, payload);
  }

  deductUserCredit(amount) {
    this.store.dispatch({type: DEDUCT_CREDIT, amount: amount });
  }

  topupUserCredit(amount) {
    this.store.dispatch({type: TOPUP_CREDIT, amount: amount });
  }

  getForType(typeId) {

    return this.http.get(FOR_TYPE + '/' + typeId).map(res => res['data']);
  }
}
