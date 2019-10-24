import * as withRedux from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import nextReduxSaga from '../components/app/withReduxSaga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState = {}) {
  const applyEnvMiddleware = true ? composeWithDevTools(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware);

  const store: any = createStore(
    rootReducer,
    initialState,
    applyEnvMiddleware,
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export function withReduxSaga(BaseComponent: any, mapStateToProps?: any, mapDispatchToProps?: any) {
  return withRedux(configureStore, mapStateToProps, mapDispatchToProps)(nextReduxSaga(BaseComponent));
}
