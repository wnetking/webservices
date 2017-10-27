import * as t from './actionTypes';

const initState = {
  cart_id: null,
  data: null,
  fetching: false,
  cartItems: [],
  error: {
    status: false,
    message: null
  }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    //////////////// ADD TO CART ///////////////////
    case t.ADD_TO_CART_REQUESTED:
      return {
        ...state,
        ...{
          fetching: false,
          error: {
            status: false,
            message: null
          }
        }
      }
    case t.ADD_TO_CART_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.ADD_TO_CART_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }
    
    case t.GET_CART_ID_REQUESTED:
      return {
        ...state,
        ...action.payload
      }
    case t.GET_CART_ID_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      }
    case t.GET_CART_ID_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }  

    case t.ADD_CART_ITEM_REQUESTED:
    return {
      ...state,
      ...{
        fetching: true
      }
    }
    
    case t.ADD_CART_ITEM_REQUESTED_SUCCEEDED:
      return {
        ...state,
        ...{
          cartItems: [].concat(state.cartItems.filter(item => {
            if(JSON.stringify(item.product_option_values) === JSON.stringify(action.payload.cartItems[0].product_option_values) &&
              item.id_product === action.payload.cartItems[0].id_product){
                return false
            }
            return true
          }), action.payload.cartItems),
          fetching: false
        }
      }
    case t.ADD_CART_ITEM_REQUESTED_FAILED:
      return {
        ...state,
        ...action.payload
      }  
    default:
      return state
  }
}