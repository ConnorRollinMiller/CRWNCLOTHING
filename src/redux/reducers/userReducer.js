import { UserActionTypes } from '../types';

const initialState = {
   currentUser: null
};

export default (state = initialState, action) => {
   const { type, payload } = action;

   switch (type) {
      case UserActionTypes.SET_CURRENT_USER:
         return {
            ...state,
            currentUser: payload
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
