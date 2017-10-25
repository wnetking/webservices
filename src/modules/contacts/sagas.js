import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes';
import * as actions from './actions'
import Api from 'api'

function* fetch() {
  try {
    const data = yield call(Api.cms.getCmsList, null);
    yield put(actions.cmsListSuccess(data));
  } catch (e) {
    yield put(actions.cmsListFailed(e.message));
  }
}


function* saga() {
  yield takeLatest(t.FETCH_REQUESTED, fetch);
}

export default saga;