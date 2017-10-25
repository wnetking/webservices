import * as t from './actionTypes'

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
    user_id : data.id,
    isLogin : true
  }
})

export const fetchRegistrationFailed = (err) => ({
  type: t.FETCH_REGISTRATION_REQUESTED_FAILED,
  payload: {
    isLogin : false,
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
