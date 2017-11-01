import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes';
import * as actions from './actions'
import Api from 'api'

function* fetch() {
  try {
    const data = yield call(Api.imageslider.all, null);
    yield put(actions.success(data));
  } catch (e) {
    yield put(actions.failed(e.message));
  }
}

function* saga() {
  yield takeLatest(t.FETCH_REQUESTED, fetch);
}

export default saga;