import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes'
import * as actions from './actions'
import Api from 'api'

function * fetchFeatures (action) {
  try {
    const data = yield call(Api.features.getAll, action.payload.array)

    yield put(actions.featureSsuccess(data))
  } catch (e) {
    yield put(actions.featuresFailed(e.message))
  }
}

function * fetchAccessories (action) {
  try {
    const data =  yield call(Api.products.getFilterProductsList,
      null,null,null,action.payload.array)

    yield put(actions.accessoriesSsuccess(data))
    
  } catch (e) {
    yield put(actions.accessoriesFailed(e.message))
  }
}

function * fetchBundle (action) {
  try {
    const data =  yield call(Api.products.getFilterProductsList,
      null,null,null,action.payload.array)

    yield put(actions.bundleSsuccess(data))    
  } catch (e) {
    yield put(actions.bundleFailed(e.message))
  }
}

function * saga () {
  yield takeLatest(t.FETCH_FEATURES_REQUESTED, fetchFeatures)
  yield takeLatest(t.FETCH_ACCESSORIES_REQUESTED, fetchAccessories)
  yield takeLatest(t.FETCH_BUNDLE_REQUESTED, fetchBundle)
}

export default saga
