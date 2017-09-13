import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_PAGE_DATA,
  FETCH_PRODUCT_PAGE_DATA_REQUEST,
  FETCH_PRODUCT_ON_CATEGORY,
  FETCH_PRODUCT_ON_CATEGORY_REQUEST,
  FETCH_PRODUCT_PAGE_DATA_RESET
} from '../constants'

import {products} from '../utils/products/'
import {category} from '../utils/category/'

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
export function resetProductPageData() {
  return {
    type   : FETCH_PRODUCT_PAGE_DATA_RESET,
    payload: {
      productPage: {
        data    : null,
        fetching: true
      }
    }
  }
}


export function fetchOnCategory(id) {
  return (dispatch) => {
    category.getInfo(id).then(catData => {
      category.getProductsByCategoryId(id).then(data => {
        dispatch({
          type   : FETCH_PRODUCT_ON_CATEGORY,
          payload: {
            productsOnCategory: {
              data    : data,
              name    : catData.category.name,
              fetching: false
            }
          }
        })
      });
    });
  }
}

export function resetFetchOnCategory() {
  return {
    type   : FETCH_PRODUCT_ON_CATEGORY_REQUEST,
    payload: {
      productsOnCategory: {
        data    : null,
        name    : null,
        fetching: true
      }
    }
  }
}