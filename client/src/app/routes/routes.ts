const BASE_URL = 'http://localhost:8000/api/';

export const ALL_PRODUCTS = BASE_URL + 'products/index';

export const CHECK_EMAIL = BASE_URL + 'auth/validate/email';

export const REGISTER_USER = BASE_URL + 'auth/register';

export const LOGIN = BASE_URL + 'auth/login';

export const GET_USER = BASE_URL + 'client';

export const GET_USER_BY_EMAIL = BASE_URL + 'users';

export const LOGOUT_ROUTE = BASE_URL + 'auth/logout';

/**
 * TRANSACTIONS
 */

 export const PURCHASE_TYPE = BASE_URL + 'transaction_types/purchase';
 export const TOPUP_TYPE = BASE_URL + 'transaction_types/topup';

 export const CREATE_TRANSACTION = BASE_URL + 'transactions/store';

