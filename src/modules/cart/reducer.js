import * as t from './actionTypes';

const initState = {
  cart_id: null,
  data: null,
  cartItems: []
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case t.LOGIN_REQUESTED:
      return {
        ...state,
        ...action.payload
      }
    case t.LOGIN_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.LOGIN_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}