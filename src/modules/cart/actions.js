import * as t from './actionTypes'

//////////////// ADD TO CART ///////////////////

export const addToCartRequest = (data) => ({
  type: t.ADD_TO_CART_REQUESTED,
  payload: {
    data: data
  }
})

export const addToCartSucceess = (data) => ({
  type: t.ADD_TO_CART_REQUESTED_SUCCEEDED,
  payload: {
    data: data,
    fetching: false
  }
})

export const addToCartFailed = (err) => ({
  type: t.ADD_TO_CART_REQUESTED_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})

//////////////// CREATE CART ///////////////////

export const createCartRequest = (data) => ({
  type: t.CREATE_CART_REQUESTED,
  payload: {
    data: data
  }
})
export const createCartSucceess = (data) => ({
  type: t.CREATE_CART_REQUESTED_SUCCEEDED,
  payload: {
    data: data,
    fetching: false,
  }
})
export const createCartFailed = (err) => ({
  type: t.CREATE_CART_REQUESTED_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})
