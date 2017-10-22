import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes';
import * as actions from './actions'
import Api from 'api'

function* fetchCategoryList() {
  try {
    const data = yield call(Api.category.getCategoryList, null);
    yield put(actions.categoryListSuccess(data));
  } catch (e) {
    yield put(actions.categoryListFailed(e.message));
  }
}

function* fetchOne(action) {
  try {
    const data = yield call(Api.category.getOne, action.payload.id)
    yield put(actions.fetchOneSuccess(data))
  } catch (e) {
    yield put(actions.fetchOneFailed(e.message))
  }
}

function* fetchSubCat(action) {
  try {
    const data = yield call(Api.category.getCatsData, action.payload.array)
    yield put(actions.fetchSubCatSuccess(data))
  } catch (e) {
    yield put(action.fetchSubCatFailed(e.message))
  }
}

function* saga() {
  yield takeLatest(t.FETCH_REQUESTED, fetchCategoryList);
  yield takeLatest(t.FETCH_ONE_REQUESTED, fetchOne);
  yield takeLatest(t.FETCH_SUB_CAT_REQUESTED, fetchSubCat)
}

export default saga;