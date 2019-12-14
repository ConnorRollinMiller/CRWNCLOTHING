import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import rootReducer from './reducers';

const sageMiddleware = createSagaMiddleware();

const middlewares = [sageMiddleware];

export const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(...middlewares))
);

sageMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
