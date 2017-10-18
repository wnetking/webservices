import * as t from './actionTypes'

const initState = {
  data: null,
  fetching: true,
  options: {
    data: null,
    fetching: true
  },
  all: {
    data: null,
    fetching: true
  },
  product: {
    data: null,
    fetching: true
  },
  error: {
    status: false,
    message: null
  }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case t.FETCH_COMBINATION_REQUESTED:
      return {
        ...state,
        ...{
          fetching: true
        }
      }
    case t.FETCH_COMBINATION_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_COMBINATION_FAILED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_OPTION_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_OPTION_FAILED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_ALL_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_ALL_FAILED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_PRODUCT_REQUESTED:
      return {
        ...state,
        ...{
          fetching: true,
          product: {
            fetching: true,
            data: null
          }
        }
      }
    case t.FETCH_PRODUCT_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.FETCH_PRODUCT_FAILED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}