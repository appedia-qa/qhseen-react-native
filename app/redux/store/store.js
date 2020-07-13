import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import { compact } from 'lodash';

import reducers from '../reducers';

export function configureStore(initialState) {

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = compact([
    // thunk.withExtraArgument(),
    // sagaMiddleware,
    __DEV__ ? createLogger() : null
  ]);

  const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
}
