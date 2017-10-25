import * as t from './actionTypes';

const initState = {
  user_id : null,
  data    : null,
  fetching: true,
  isLogin : false,
  error: {
    status: false,
    message: null
  }
}

export default function reducer(state = initState, action) {
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

    case t.FETCH_REGISTRATION_REQUESTED:
      return {
        ...state,
        ...{
          fetching: true,
          error: {
            status: false,
            message: null
          }
        }
      }
    case t.FETCH_REGISTRATION_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_REGISTRATION_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      } 
      
    case t.RESET_ERROR:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}