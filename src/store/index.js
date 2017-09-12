import {createStore, applyMiddleware, compose} from 'redux'
import indexReducer from '../reducers'
import thunk from 'redux-thunk'

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
    indexReducer,
    initialState,
    enhancer
  )
  /* eslint-enable */
  return store;
}

export default configureStore;