import { all, call, takeLatest, put } from 'redux-saga/effects';

import { UserActionTypes } from '../types';
import { clearCart } from '../actions/cartActions';

export function* clearCartOnSignout() {
   yield put(clearCart());
}

export function* onSignOutSuccess() {
   yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export default function* cartSagas() {
   yield all([call(onSignOutSuccess)]);
}
