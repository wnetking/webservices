import * as t from './actionTypes'

export const request = () => ({
  type: t.FETCH_REQUESTED,
  payload: {
    data: null,
    fetching: true
  }
})

export const success = (d) => ({
  type: t.FETCH_REQUESTED_SUCCEEDED,
  payload: {
    data: d,
    fetching: false
  }
})

export const failed = (err) => ({
  type: t.FETCH_REQUESTED_FAILED,
  payload: {
    error: {
      status: true,
      message: err
    }
  }
})
