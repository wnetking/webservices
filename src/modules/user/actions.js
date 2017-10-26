import * as t from './actionTypes'

export const fetchLoginRequest = (data) => ({
  type: t.FETCH_LOGIN_REQUESTED,
  payload: {
    data: data
  }
})

export const fetchLoginSucceess = (data) => ({
  type: t.FETCH_LOGIN_REQUESTED_SUCCEEDED,
  payload: {
    data: data,
    fetching: false,
    user_id: data.id,
    isLogin: true
  }
})

export const fetchLoginFailed = (err) => ({
  type: t.FETCH_LOGIN_REQUESTED_FAILED,
  payload: {
    isLogin: false,
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})

export const fetchRegistrationRequest = (data) => ({
  type: t.FETCH_REGISTRATION_REQUESTED,
  payload: {
    data: data
  }
})

export const fetchRegistrationSucceess = (data) => ({
  type: t.FETCH_REGISTRATION_REQUESTED_SUCCEEDED,
  payload: {
    data: data,
    fetching: false,
    user_id: data.id,
    isLogin: true
  }
})

export const fetchRegistrationFailed = (err) => ({
  type: t.FETCH_REGISTRATION_REQUESTED_FAILED,
  payload: {
    isLogin: false,
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})

export const resetError = () => ({
  type: t.RESET_ERROR,
  payload: {
    error: {
      status: false,
      message: null
    }
  }
})

export const fetchLogout = () => ({
  type: t.FETCH_LOGOUT_REQUESTED,
  payload: {}
})

export const fetchLogoutSucceess = () => ({
  type: t.FETCH_LOGOUT_REQUESTED_SUCCEEDED,
  payload: {
    user_id: null,
    data: null,
    fetching: false,
    isLogin: false,
    error: {
      status: false,
      message: null
    }
  }
})

export const fetchLogoutFailed = (err) => ({
  type: t.FETCH_LOGOUT_REQUESTED_FAILED,
  payload: {
    error: {
      status: true,
      message: err
    }
  }
})
