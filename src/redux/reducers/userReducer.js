import { UserActionTypes } from '../types';

const initialState = {
   currentUser: null,
   error: null
};

export default (state = initialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case UserActionTypes.SIGN_IN_SUCCESS:
         return {
            ...state,
            currentUser: payload,
            error: null
         };
      case UserActionTypes.SIGN_OUT_SUCCESS:
         return {
            ...state,
            currentUser: null,
            error: null
         };
      case UserActionTypes.SIGN_IN_FAILURE:
      case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
         return {
            ...state,
            error: payload
         };
      case UserActionTypes.LOGOUT_USER:
         return {
            ...state,
            currentUser: null
         };
      default:
         return state;
   }
};
