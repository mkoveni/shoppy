import { Product } from '../../product/product';
import { SET_PRODUCTS } from './actions';
import { tassign } from 'tassign';

export interface IShopState {
  products: Product[];
}

export const INITIAL_SHOP_STATE: IShopState = {
  products: []
};

export function shopReducer(state: IShopState = INITIAL_SHOP_STATE, action): IShopState {

  switch(action.type) {
    case SET_PRODUCTS:
      return tassign(state, {products: action.products})
  }
  return state;
}
