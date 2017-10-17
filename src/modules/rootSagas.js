import { fork,all } from 'redux-saga/effects';

import category from './category';
import user from './user';
import productlist from './productlist';
import manufacturers from './manufacturers';
import combinations from './combinations';

export default function* rootSagas() {
  yield all([
      fork(category.saga),
      fork(user.saga),
      fork(productlist.saga),
      fork(combinations.saga),
      fork(manufacturers.saga),
  ]);
}