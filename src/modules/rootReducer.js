import { combineReducers } from 'redux';
import category from './category';
import user from './user'
import cart from './cart'
import manufacturers from './manufacturers'
import combinations from './combinations'
import currencies from './currencies'
import product from './product'
import productlist from './productlist'

export default combineReducers({
  [category.constants.NAME]: category.reducer,
  [user.constants.NAME]: user.reducer,
  [cart.constants.NAME]: cart.reducer,
  [productlist.constants.NAME]: productlist.reducer,
  [manufacturers.constants.NAME]: manufacturers.reducer,
  [combinations.constants.NAME]: combinations.reducer,
  [currencies.constants.NAME]: currencies.reducer,
  [product.constants.NAME]: product.reducer,
});