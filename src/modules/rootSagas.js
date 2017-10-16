import { fork,all } from 'redux-saga/effects';

import category from './category';
import user from './user';

export default function* rootSagas() {
  yield all([
      fork(category.saga),
      fork(user.saga)
  ]);
}