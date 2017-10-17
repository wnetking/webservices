import * as t from './actionTypes'

export const fetchRequest = (limit = 6 , category = null , manufacturer = null , productsArray = null) => ({
  type: t.FETCH_REQUESTED,
  payload: {
    limit: limit,
    category: category,
    manufacturer: manufacturer,
    productsArray: productsArray
  }
})

export const success = (d) => ({
  type: t.FETCH_REQUESTED_SUCCEEDED,
  payload: {
    data: d,
    fetching: false
  }
})

export const failed = (err) => ({
  type: t.FETCH_REQUESTED_FAILED,
  payload: {
    fetching: false,
    error: {
      status: true,
      message: err
    }
  }
})