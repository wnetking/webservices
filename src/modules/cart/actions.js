import * as t from './actionTypes'


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
    fetching: false,
    cart_id: data.id,
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


export const getCartIdRequest = () => ({
  type: t.GET_CART_ID_REQUESTED,
  payload: {}
})
export const getCartIdSucceess = (data) => ({
  type: t.GET_CART_ID_REQUESTED_SUCCEEDED,
  payload: {
    data: data,
    fetching: false,
    cart_id: data.id
  }
})
export const getCartIdFailed = (err) => ({
  type: t.GET_CART_ID_REQUESTED_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})


export const addCartItemRequest = (item) => ({
  type: t.ADD_CART_ITEM_REQUESTED,
  payload: {
    item: item
  }
})
export const addCartItemSucceess = (data) => ({
  type: t.ADD_CART_ITEM_REQUESTED_SUCCEEDED,
  payload: {
    cartItems: data
  }
})
export const addCartItemFailed = (err) => ({
  type: t.ADD_CART_ITEM_REQUESTED_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})