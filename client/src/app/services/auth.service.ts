import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store/store';
import { LOGIN, GET_USER, LOGOUT_ROUTE, CHECK_EMAIL, REGISTER_USER } from '../routes/routes';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { SET_USER, SET_AUTH_STATE } from '../store/auth/actions';
import { API_TOKEN_NAME } from '../constants';

@Injectable()
export class AuthService {

  isAuthenticated =  new BehaviorSubject<boolean>(this.tokenExists());

  constructor(private store: NgRedux<IAppState>,  private http: HttpClient) { }

  login(email: string, password: string) {

    return this.http.post(LOGIN, {
      email: email,
      password: password
    }).map((res: Response) => res);

  }

  setAuthState(auth: boolean) {

    this.isAuthenticated.next(auth);

    this.store.dispatch({ type: SET_AUTH_STATE, auth: auth});
  }

  setUser(user) {
    this.store.dispatch({ type: SET_USER, user: user});
  }

  saveToken(token: string) {
    localStorage.setItem(API_TOKEN_NAME, token);
  }

  tokenExists() {
    return !!localStorage.getItem(API_TOKEN_NAME);
  }

  getToken() {
    if (this.tokenExists()) {
      return localStorage.getItem(API_TOKEN_NAME);
    }

    return null;
  }

  removeToken() {
    localStorage.removeItem(API_TOKEN_NAME);
  }

  check() {
    return this.isAuthenticated.asObservable().share();
  }

  getApiUser() {
    return this.http.get(GET_USER).map(res => res['data']);
  }

  logout() {
   this.setAuthState(false);
   this.removeToken();
   this.setUser(false);
   this.http.post(LOGOUT_ROUTE, {});
  }

  validateEmail(email: string) {

    return this.http.get(CHECK_EMAIL + '/' + email).map(res => res['status']);
  }

  register(payload) {

    return this.http.post(REGISTER_USER, payload);
  }

}
