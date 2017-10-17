import { call, put, takeLatest,takeEvery } from 'redux-saga/effects'
import * as t from './actionTypes'
import * as actions from './actions'
import Api from 'api'

function* fetch (action) {
  try {
    const data = yield call(Api.manufacturer.getFilterManufacturersList, 
                            action.payload.limit)
    yield put(actions.success(data))    
  } catch (e) {
    yield put(actions.failed(e.message))
  }
}

function* fetchOne (action) {
  try {
    const data = yield call(Api.manufacturer.getOne, action.payload.id)
    yield put(actions.fetchOneSuccess(data))
  } catch (e) {
    yield put(actions.fetchOneFailed(e.message))
  }
}

function* saga () {
  yield takeLatest(t.FETCH_ONE_REQUESTED, fetchOne)
  yield takeEvery(t.FETCH_REQUESTED, fetch)
}

export default saga
