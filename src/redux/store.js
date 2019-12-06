import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const middlewares = [];

export const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default { store, persistor };
