import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import rootReducer from 'modules/rootReducer'
import rootSagas from 'modules/rootSagas'

const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
          typeof window === 'object' &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );

  const store = createStore(
    
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
    // enhancer
  )
  /* eslint-enable */
  sagaMiddleware.run(rootSagas)
  
  return store;
}


export default configureStore;