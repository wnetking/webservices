import * as t from './actionTypes';

const initState = {
  user_id : null,
  data    : null,
  fetching: false,
  isLogin : false,
  error: {
    status: false,
    message: null
  }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case t.FETCH_LOGIN_REQUESTED:
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
    case t.FETCH_LOGIN_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_LOGIN_REQUESTED_FAILED:
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

    case t.FETCH_LOGOUT_REQUESTED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_LOGOUT_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_LOGOUT_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }  
    default:
      return state
  }
}