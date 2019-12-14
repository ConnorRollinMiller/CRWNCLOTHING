import { CartActionTypes } from '../types';
import { addItemToCart, removeItemFromCart } from '../cartUtils';

const intitialState = {
   isHidden: true,
   cartItems: []
};

export default (state = intitialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case CartActionTypes.TOGGLE_CART_DROPDOWN:
         return {
            ...state,
            isHidden: !state.isHidden
         };
      case CartActionTypes.ADD_ITEM:
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, payload)
         };
      case CartActionTypes.REMOVE_ITEM:
         return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, payload)
         };
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
         return {
            ...state,
            cartItems: state.cartItems.filter(
               cartItem => cartItem.id !== action.payload.id
            )
         };
      case CartActionTypes.CLEAR_CART:
         return {
            ...state,
            cartItems: []
         };
      default:
         return state;
   }
};
