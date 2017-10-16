import { combineReducers } from 'redux';
import category from './category';
import user from './user'
import cart from './cart'

export default combineReducers({
  [category.constants.NAME]: category.reducer,
  [user.constants.NAME]: user.reducer,
  [cart.constants.NAME]: cart.reducer
});