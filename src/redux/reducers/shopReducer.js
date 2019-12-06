import { ShopActionTypes } from '../types';

const initialState = {
   collections: null
};

export default (state = initialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case ShopActionTypes.UPDATE_COLLECTIONS:
         return {
            ...state,
            collections: payload
         };
      default:
         return state;
   }
};
