import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes'
import * as actions from './actions'
import Api from 'api'

function * fetchRegistration (action) {
  try {
    const data = yield call(Api.user.registration, action.payload.data)
    yield put(actions.fetchRegistrationSucceess(data))
    
    console.log(data)
  } catch (e) {
    yield put(actions.fetchRegistrationFailed(e.message))
    console.log(e.message)
  }
}

function * saga () {
  yield takeLatest(t.FETCH_REGISTRATION_REQUESTED, fetchRegistration)
}

export default saga
