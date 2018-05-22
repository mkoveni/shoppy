import {tassign} from 'tassign';
import { IAuthState, INITIAL_AUTH_STATE, authReducer } from './auth/store';
import { ALL_PRODUCTS } from '../routes/routes';
import { Product } from '../product/product';
import { combineReducers } from 'redux';
import { IShopState, INITIAL_SHOP_STATE, shopReducer } from './shop/store';

export interface IAppState {
    auth?: IAuthState;
    shop?: IShopState;
}

export const INITIAL_STATE: IAppState = {
    auth: INITIAL_AUTH_STATE,
    shop: INITIAL_SHOP_STATE
}

export const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer
});


