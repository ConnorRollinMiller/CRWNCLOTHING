import { UserActionTypes } from '../types';
import { auth } from '../../firebase/utils';

export const setCurrentUser = user => ({
   type: UserActionTypes.SET_CURRENT_USER,
   payload: user
});

export const logoutUser = () => {
   auth.signOut();
   return {
      type: UserActionTypes.LOGOUT_USER
   };
};
