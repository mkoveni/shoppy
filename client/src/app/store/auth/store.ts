import { SET_AUTH_STATE, SET_USER, DEDUCT_CREDIT, TOPUP_CREDIT } from './actions';
import {tassign} from 'tassign';

export interface IAuthState
{
    user: User;
    authenticated: boolean;
}

export interface User
{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    credit: number;
}

export const INITIAL_AUTH_STATE: IAuthState = {
    user: null,
    authenticated: false
};


function setAuth(state: IAuthState, action) {
    return tassign(state, {authenticated: action.auth});
}

function setUser(state: IAuthState, action) {
    return tassign(state, {user: action.user});
}

function deductUserCredit(state: IAuthState, action) {
  const user = state.user;
  user.credit = user.credit - parseFloat(action.amount);

  return tassign(state, {user: user});
}

function topupUserCredit(state: IAuthState, action) {
  const user = state.user;
  user.credit = user.credit + parseFloat(action.amount);

  return tassign(state, {user: user});
}

export function authReducer (state: IAuthState = INITIAL_AUTH_STATE, action): IAuthState {

    switch (action.type) {
        case SET_AUTH_STATE: return setAuth(state, action);
        case SET_USER: return setUser(state, action);
        case DEDUCT_CREDIT: return deductUserCredit(state, action);
        case TOPUP_CREDIT: return topupUserCredit(state, action);
    }

    return state;

}

export const INITIAL_USER_STATE: User = {
  id: null,
  first_name: null,
  last_name: null,
  email: null,
  credit: null
};
