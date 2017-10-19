import * as t from './actionTypes'

export const fetchCombinationRequest = (id) => ({
  type: t.FETCH_COMBINATION_REQUESTED,
  payload: {
    id: id
  }
})

export const fetchCombinationSuccess = (d) => ({
  type: t.FETCH_COMBINATION_SUCCEEDED,
  payload: {
    data: d,
    fetching: false
  }
})

export const fetchCombinationFailed = (err) => ({
  type: t.FETCH_COMBINATION_FAILED,
  payload: {
    error: {
      status: true,
      message: err
    }
  }
})

export const fetchOptionRequest = (array) => ({
  type: t.FETCH_OPTION_REQUESTED,
  payload: {
    array: array,
  }
})

export const fetchOptionSuccess = (d) => ({
  type: t.FETCH_OPTION_SUCCEEDED,
  payload: {
    options: {
      data: d,
      fetching: false
    }
  }
})

export const fetchOptionFailed = (err) => ({
  type: t.FETCH_OPTION_FAILED,
  payload: {
    error: {
      status: true,
      message: err
    }
  }
})

export const fetchAllRequest = (array) => ({
  type: t.FETCH_ALL_REQUESTED,
  payload: {
    array: array
  }
})

export const fetchAllSuccess = (d) => ({
  type: t.FETCH_ALL_SUCCEEDED,
  payload: {
    all: {
      data: d,
      fetching: false
    }
  }
})

export const fetchAllFailed = (err) => ({
  type: t.FETCH_ALL_FAILED,
  payload: {
    error: {
      status: true,
      message: err
    }
  }
})

export const fetchProductRequest = (id) => ({
  type: t.FETCH_PRODUCT_REQUESTED,
  payload: {
    id: id
  }
})

export const fetchProductSuccess = (d) => ({
  type: t.FETCH_PRODUCT_SUCCEEDED,
  payload: {
    product: {
      data: d,
      fetching: false
    }
  }
})

export const fetchProductFailed = (err) => ({
  type: t.FETCH_PRODUCT_FAILED,
  payload: {
    error: {
      status: true,
      message: err
    }
  }
})