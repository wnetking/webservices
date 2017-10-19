import * as t from './actionTypes'

export const fetchRequest = () => ({
  type: t.FETCH_REQUESTED,
  payload: {}
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
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})