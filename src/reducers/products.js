import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_PAGE_DATA,
  FETCH_PRODUCT_PAGE_DATA_REQUEST,
  FETCH_PRODUCT_ON_CATEGORY,
  FETCH_PRODUCT_ON_CATEGORY_REQUEST,
  FETCH_PRODUCT_PAGE_DATA_RESET,
  FETCH_PRODUCT_OPTIONS,
  FETCH_PRODUCT_OPTIONS_VALUE
} from '../constants/'

const initState = {
  productPage          : {
    data    : null,
    fetching: true
  },
  productList          : {
    data    : null,
    fetching: true
  },
  productsOnCategory   : {
    data    : null,
    name    : null,
    fetching: true
  },
  productOptions       : {
    data    : null,
    fetching: true
  },
  productOptionValues: {
    data    : null,
    fetching: true
  }
}


export default function productsReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_PRODUCT_PAGE_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_PRODUCT_PAGE_DATA:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_PRODUCT_PAGE_DATA_RESET:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_PRODUCT_ON_CATEGORY_REQUEST:
      return {
        ...state, ...action.payload
      }
    case FETCH_PRODUCT_ON_CATEGORY:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_PRODUCT_OPTIONS:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_PRODUCT_OPTIONS_VALUE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}