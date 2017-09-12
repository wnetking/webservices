import {FETCH_PRODUCTS, FETCH_PRODUCT_PAGE_DATA, FETCH_PRODUCT_PAGE_DATA_REQUEST} from '../constants/'
const initState = {
  productPage: {
    fetching: true,
    data    : null
  },
  productList: {
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
        ...state, ...action.payload
      }
    case FETCH_PRODUCT_PAGE_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}