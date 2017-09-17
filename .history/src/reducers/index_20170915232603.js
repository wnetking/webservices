import {combineReducers} from 'redux'
import productsReducer from './products'
import manufacturersReducer from './manufacturer'
import featuresReducer from './features'
import combinationsReducer from './combinations'
import categoryReducer from './category'
import cmsReducer from './cms'
import imagesReducer from './images'

export default  combineReducers({
  productsReducer,
  imagesReducer,
  manufacturersReducer,
  featuresReducer,
  combinationsReducer,
  cmsReducer,
  categoryReducer
})