import * as t from './actionTypes';

const initState = {
  cart_id: null,
  data: null,
  fetching: false,
  cartItems: [],
  error: {
    status: false,
    message: null
  }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    //////////////// ADD TO CART ///////////////////
    case t.ADD_TO_CART_REQUESTED:
      return {
        ...state,
        ...{
          fetching: false,
          error: {
            status: false,
            message: null
          }
        }
      }
    case t.ADD_TO_CART_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.ADD_TO_CART_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }
    
    //////////////// CREATE CART ///////////////////
    case t.CREATE_CART_REQUESTED:
      return {
        ...state,
        ...action.payload
      }
    case t.CREATE_CART_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.CREATE_CART_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }  
    default:
      return state
  }
}