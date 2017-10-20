import * as t from './actionTypes'

export const fetchListRequest = (limit = 6) => ({
  type: t.FETCH_REQUESTED,
  payload: {
    limit: limit
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
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})

export const fetchOneRequest = (id) => ({
  type: t.FETCH_ONE_REQUESTED,
  payload: {
    id: id
  }
})

export const fetchOneSuccess = (d) => ({
  type: t.FETCH_ONE_SUCCEEDED,
  payload: {
    manufacturerPage: {
      data: d,
      fetching: false
    }
  }
})

export const fetchOneFailed = (err) => ({
  type: t.FETCH_ONE_FAILED,
  payload: {
    manufacturerPage: {
      fetching: false,
      error: {
        status: true,
        message: err
      }
    }
  }
})


export const fetchInfoRequest = (id) => ({
  type: t.FETCH_INFO_REQUESTED,
  payload: {
    id: id
  }
})

export const fetchInfoSuccess = (d) => ({
  type: t.FETCH_INFO_SUCCEEDED,
  payload: {
    info: {
      data: d,
      fetching: false
    }
  }
})

export const fetchInfoFailed = (err) => ({
  type: t.FETCH_INFO_SUCCEEDED,
  payload: {
    info: {
      fetching: false,
      error: {
        status: true,
        message: err
      }
    }
  }
})