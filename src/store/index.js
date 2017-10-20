import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from 'modules/rootReducer'
import rootSagas from 'modules/rootSagas'

const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  // const composeEnhancers =
  //         typeof window === 'object' &&
  //         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  //           window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  //             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  //           }) : compose;

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  )
  /* eslint-enable */
  sagaMiddleware.run(rootSagas)
  
  return store;
}


export default configureStore;