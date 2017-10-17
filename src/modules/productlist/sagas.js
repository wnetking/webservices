import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes'
import * as actions from './actions'
import Api from 'api'

function * fetch (action) {
  try {
    const data = yield call(Api.products.getFilterProductsList,
      action.payload.limit,
      action.payload.category,
      action.payload.manufacturer,
      action.payload.productsArray)

    yield put(actions.success(data))

  } catch (e) {
    yield put(actions.failed(e.message))
  }
}

function * saga () {
  yield takeLatest(t.FETCH_REQUESTED, fetch)
}

export default saga
