import {
  FETCH_PRODUCTS, FETCH_PRODUCT_PAGE_DATA, FETCH_PRODUCT_PAGE_DATA_REQUEST
} from '../constants'

import {products} from '../utils/products/'

export function fetchAll() {
  return (dispatch) => {
    products.all().then(data => {
      dispatch({
        type   : FETCH_PRODUCTS,
        payload: {
          productList: {
            data    : data,
            fetching: false
          }
        }
      })
    });
  }
}

export function fetchOne(id) {
  return (dispatch) => {
    dispatch({
      type   : FETCH_PRODUCT_PAGE_DATA_REQUEST,
      payload: {
        productPage: {
          data    : null,
          fetching: true
        }
      }
    })

    products.one(id).then(data => {
      dispatch({
        type   : FETCH_PRODUCT_PAGE_DATA,
        payload: {
          productPage: {
            data    : data.product,
            fetching: false
          }
        }
      })
    });
  }
}