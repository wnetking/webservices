import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_PAGE_DATA,
  FETCH_PRODUCT_PAGE_DATA_REQUEST,
  FETCH_PRODUCT_ON_CATEGORY,
  FETCH_PRODUCT_ON_CATEGORY_REQUEST,
  FETCH_PRODUCT_PAGE_DATA_RESET,
  FETCH_PRODUCT_OPTIONS,
  FETCH_PRODUCT_OPTIONS_VALUE
} from '../constants'

import { products } from '../utils/products/'
import { category } from '../utils/category/'

export function fetchAll() {
  return (dispatch) => {
    products.all().then(data => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          productList: {
            data: data,
            fetching: false
          }
        }
      })
    });
  }
}
export function fetchSelected(array) {
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        productPage: {
          data: null,
          fetching: true
        }
      }
    })

    products.selected(array).then(data => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          productList: {
            data: data,
            fetching: false
          }
        }
      })
    });
  }
}

export function getFilterProductsList(limit = 6, category = null, manufacturer = null) {
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: {
        productList: {
          data: null,
          fetching: true
        }
      }
    })
    products.getFilterProductsList(limit, category, manufacturer).then(d => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          productList: {
            data: d,
            fetching: false
          }
        }
      })
    })
  }
}

export function fetchOne(id) {
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCT_PAGE_DATA_REQUEST,
      payload: {
        productPage: {
          data: null,
          fetching: true
        }
      }
    })

    products.one(id).then(data => {
      dispatch({
        type: FETCH_PRODUCT_PAGE_DATA,
        payload: {
          productPage: {
            data: data.product,
            fetching: false
          }
        }
      })
    });
  }
}
export function resetProductPageData() {
  return {
    type: FETCH_PRODUCT_PAGE_DATA_RESET,
    payload: {
      productPage: {
        data: null,
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
          type: FETCH_PRODUCT_ON_CATEGORY,
          payload: {
            productsOnCategory: {
              data: data,
              name: catData.category.name,
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
    type: FETCH_PRODUCT_ON_CATEGORY_REQUEST,
    payload: {
      productsOnCategory: {
        data: null,
        name: null,
        fetching: true
      }
    }
  }
}

export function fetchProductOption() {
  return (dispatch) => {
    console.log('FETCH_PRODUCT_OPTIONS')
    dispatch({
      type: FETCH_PRODUCT_OPTIONS,
      payload: {
        productOptions: {
          data: null,
          name: null,
          fetching: false
        }
      }
    })
  }
}

export function fetchProductOptionValue() {
  return (dispatch) => {
    console.log('FETCH_PRODUCT_OPTIONS_VALUE')
    dispatch({
      type: FETCH_PRODUCT_OPTIONS_VALUE,
      payload: {
        productOptionValues: {
          data: null,
          name: null,
          fetching: false
        }
      }
    })
  }
}