import { SET_AUTH_STATE, SET_USER } from './actions';
import {tassign} from 'tassign';

export interface IAuthState
{
    user: User;
    authenticated: boolean;
}

export interface User
{
    id: number;
    name: string;
    email: string;
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

export function authReducer (state: IAuthState = INITIAL_AUTH_STATE, action): IAuthState {

    switch (action.type) {
        case SET_AUTH_STATE: return setAuth(state, action);
        case SET_USER: return setUser(state, action);
    }

    return state;

}
