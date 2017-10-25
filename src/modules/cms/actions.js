import * as t from './actionTypes';


export const getCmsList = () => ({
  type: t.FETCH_REQUESTED,
  payload: {
    cmsList: {
      data: null,
      fatching: true
    }
  }
});

export const cmsListSuccess = (d) => ({
  type: t.FETCH_REQUESTED_SUCCEEDED,
  payload: {
    cmsList: {
      data: d,
      fatching: false
    }
  }
});

export const cmsListFailed = (err) => ({
  type: t.FETCH_REQUESTED_FAILED,
  payload: {
    cmsList: {
      fatching: false,
      error: {
        status: true,
        message: err
      }
    }
  }
});

export const fetchOneRequest = (id) => ({
  type: t.FETCH_ONE_REQUESTED,
  payload: {
    id: id
  }
})

export const fetchOneSuccess = (d) => ({
  type: t.FETCH_ONE_SUCCEEDED,
  payload: {
    data: d,
    fetching: false
  }
})

export const fetchOneFailed = (err) => ({
  type: t.FETCH_ONE_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})