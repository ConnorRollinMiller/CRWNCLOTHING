export const UserActionTypes = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
   GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
   EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
   SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
   SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
   CHECK_USER_SESSION: 'CHECK_USER_SESSION',
   SIGN_OUT_START: 'SIGN_OUT_START',
   SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
   SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
   SIGN_UP_START: 'SIGN_UP_START',
   SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
   SIGN_UP_FAILURE: 'SIGN_UP_FAILURE'
};

export const CartActionTypes = {
   TOGGLE_CART_DROPDOWN: 'TOGGLE_CART_DROPDOWN',
   ADD_ITEM: 'ADD_ITEM',
   REMOVE_ITEM: 'REMOVE_ITEM',
   CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
   CLEAR_CART: 'CLEAR_CART'
};

export const ShopActionTypes = {
   FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
   FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
   FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE'
};