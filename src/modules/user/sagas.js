import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from './actionTypes'
import * as actions from './actions'
import Api from 'api'

function * fetchRegistration (action) {
  try {
    const data = yield call(Api.user.userRequest, action.payload.data)
    yield put(actions.fetchRegistrationSucceess(data))
    
  } catch (e) {
    yield put(actions.fetchRegistrationFailed(e.message))
  }
}

function * fetchLogin (action) {
  try {
    const data = yield call(Api.user.userRequest, action.payload.data)

    yield put(actions.fetchLoginSucceess(data))    
  } catch (e) {
    yield put(actions.fetchLoginFailed(e.message))
  }
}

function * fetchLogout (action) {
  try {
    Api.user.logout()
    
    yield put(actions.fetchLogoutSucceess())    
  } catch (e) {
    yield put(actions.fetchLogoutFailed(e.message))
  }
}


function * saga () {
  yield takeLatest(t.FETCH_REGISTRATION_REQUESTED, fetchRegistration)
  yield takeLatest(t.FETCH_LOGIN_REQUESTED, fetchLogin)
  yield takeLatest(t.FETCH_LOGOUT_REQUESTED, fetchLogout)
}

export default saga
