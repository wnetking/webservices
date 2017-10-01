import {combineReducers} from 'redux'
import productsReducer from './products'
import manufacturersReducer from './manufacturer'
import featuresReducer from './features'
import combinationsReducer from './combinations'
import categoryReducer from './category'
import contactsReducer from './contacts'
import imagesliderReducer from './imageslider'
import storesReducer from './stores'
import cmsReducer from './cms'
import imagesReducer from './images'
import generalReducer from './general'

export default combineReducers({
  generalReducer,
  productsReducer,
  imagesReducer,
  manufacturersReducer,
  featuresReducer,
  combinationsReducer,
  cmsReducer,
  categoryReducer,
  contactsReducer,
  storesReducer,
  imagesliderReducer
})