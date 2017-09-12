import {combineReducers} from 'redux'
import productsReducer from './products'
import imagesReducer from './images'

export default  combineReducers({
  productsReducer, imagesReducer
})