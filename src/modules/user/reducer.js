import * as t from './actionTypes';

const initState = {
  login: {
    user_id : null,
    data    : null,
    fetching: true,
    isLogin : false,
    message : {
      show: false,
      text: null
    }
  },
  registration:{
    fetching: false,
    message : {
      show: false,
      text: null
    }
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
    default:
      return state
  }
}