import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
   firestore,
   convertCollectionsSnapshotToMap
} from '../../firebase/utils';

import {
   fetchCollectionSuccess,
   fetchCollectionsFailure
} from '../actions/shopActions';
import { ShopActionTypes } from '../types';

export function* fetchCollectionsAsync() {
   try {
      const collectionRef = firestore.collection('collections');
      const snapshot = yield collectionRef.get();
      const collectionsMap = yield call(
         convertCollectionsSnapshotToMap,
         snapshot
      );

      yield put(fetchCollectionSuccess(collectionsMap));
   } catch (err) {
      yield put(fetchCollectionsFailure(err.message));
   }
}

export function* fetchCollectionsStart() {
   yield takeLatest(
      ShopActionTypes.FETCH_COLLECTIONS_START,
      fetchCollectionsAsync
   );
}

export default function* shopSagas() {
   yield all([call(fetchCollectionsStart)]);
}
