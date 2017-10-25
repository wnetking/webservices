import * as t from './actionTypes';

const initialState = {
  data: null,
  fetching: true,
  cmsList: {
    data: null,
    fatching: true,
    error: {
      status: false,
      message: null
    }
  },
  error: {
    status: false,
    message: null
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case t.FETCH_REQUESTED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }

    case t.FETCH_ONE_REQUESTED:
      return {
        ...state,
        ...{
          data: null,
          fetching: true
        }
      }
    case t.FETCH_ONE_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_ONE_FAILED:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}