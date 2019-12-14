import { ShopActionTypes } from '../types';

const initialState = {
   collections: null,
   isFetching: false,
   errorMessage: undefined
};

export default (state = initialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case ShopActionTypes.FETCH_COLLECTIONS_START:
         return {
            ...state,
            isFetching: true
         };
      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
         return {
            ...state,
            collections: payload,
            isFetching: false
         };
      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
         return {
            ...state,
            isFetching: false,
            errorMessage: payload
         };
      default:
         return state;
   }
};
