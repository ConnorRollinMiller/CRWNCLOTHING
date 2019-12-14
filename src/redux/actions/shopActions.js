import { ShopActionTypes } from '../types';

export const fetchCollectionsStart = () => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
   payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
   type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
   payload: errorMessage
});
