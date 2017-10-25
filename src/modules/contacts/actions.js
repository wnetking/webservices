import * as t from './actionTypes'

export const fetchRequest = () => ({
  type: t.FETCH_REQUESTED,
  payload: {
    data: null,
    fatching: true
  }
})

export const success = (d) => ({
  type: t.FETCH_REQUESTED_SUCCEEDED,
  payload: {
    data: d,
    fatching: false
  }
})

export const failed = (err) => ({
  type: t.FETCH_REQUESTED_FAILED,
  payload: {
    fatching: false,
    error: {
      status: true,
      message: err
    }
  }
})
