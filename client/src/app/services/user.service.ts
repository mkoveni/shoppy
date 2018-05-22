import { NgRedux , select} from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CHECK_EMAIL, REGISTER_USER, LOGIN, GET_USER, GET_USER_BY_EMAIL } from './../routes/routes';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IAppState } from '../store/store';
import { User } from '../store/auth/store';
import { SET_USER, SET_AUTH_STATE } from '../store/auth/actions';


@Injectable()
export class UserService {

  @select() auth;
  protected http: Http;

  constructor(http: Http, private ngRedux: NgRedux<IAppState>) {
    this.http = http;
  }

  public isEmailAvailable(email: string)
  {
    return this.http.post(CHECK_EMAIL + '/' + email, {})
    .map(response => response.json());
  }

  public registerUser(user: any) {

    return this.http.post(REGISTER_USER, user)
        .map(response => response.json());
  }

  public login(email: string, password: string) {

    return this.http.post(LOGIN, {
      email: email,
      password: password
    }).map(response => response.json());
  }

  public userSessionExists() {

    const session = sessionStorage.getItem('token');

    return  (session !== null || session !== '');
  }

  public getUser() {
    return this.http.get(GET_USER)
        .map( response => response.json());
  }

  public setAuthState(user: User, auth: boolean) {

    this.ngRedux.dispatch({type: SET_USER, user: user});
    this.ngRedux.dispatch({type: SET_AUTH_STATE, auth: auth});
  }
  public setUserSession(sessionId: string) {
    sessionStorage.setItem('token', sessionId);
  }

  public  getAuth()
  {
    return this.auth;
  }
}
