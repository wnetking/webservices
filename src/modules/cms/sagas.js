import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes';
import * as actions from './actions'
import Api from 'api'

function* fetchCmsList() {
  try {
    const data = yield call(Api.cms.getCmsList, null);
    yield put(actions.cmsListSuccess(data));
  } catch (e) {
    yield put(actions.cmsListFailed(e.message));
  }
}

function* fetchOne(action) {
  try {
    const data = yield call(Api.cms.getCmsData, action.payload.id)
    yield put(actions.fetchOneSuccess(data))
    console.log(data)
  } catch (e) {
    yield put(actions.fetchOneFailed(e.message))
  }
}

function* saga() {
  yield takeLatest(t.FETCH_REQUESTED, fetchCmsList);
  yield takeLatest(t.FETCH_ONE_REQUESTED, fetchOne);
}

export default saga;