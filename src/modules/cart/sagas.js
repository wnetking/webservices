import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes';
import * as actions from './actions'
import Api from 'api'

function* userLogin() {
  try {
    const data = yield call(Api.category.getCategoryList, null);
    yield put(actions.categoryListSuccess(data));
  } catch (e) {
    yield put(actions.categoryListFailed(e.message));
  }
}

function* saga() {
  yield takeLatest(t.FETCH_REQUESTED, userLogin);
}

export default saga;