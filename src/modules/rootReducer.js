import { combineReducers } from 'redux';
import category from './category';
import manufacturers from './manufacturers';
import combinations from './combinations';
import currencies from './currencies';
import languages from './languages';
import product from './product';
import productlist from './productlist';
import cms from './cms';
import stores from './stores';

export default combineReducers({
  [category.constants.NAME]: category.reducer,
  [productlist.constants.NAME]: productlist.reducer,
  [manufacturers.constants.NAME]: manufacturers.reducer,
  [combinations.constants.NAME]: combinations.reducer,
  [currencies.constants.NAME]: currencies.reducer,
  [product.constants.NAME]: product.reducer,
  [languages.constants.NAME]: languages.reducer,
  [cms.constants.NAME]: cms.reducer,
  [stores.constants.NAME]: stores.reducer
});
