import {combineReducers} from 'redux'
import productsReducer from './products'
import manufacturersReducer from './manufacturer'
import imagesReducer from './images'

export default  combineReducers({
  productsReducer, imagesReducer, manufacturersReducer
})