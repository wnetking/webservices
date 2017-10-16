import h from './actionTypes';

const initialState = {
  cart: {
    data: null,
    fatching: false
  },

  login: {
    data: null,
    fatching: false
  },

  caategory: {
    data: null,
    fatching: false
  },
}

export function reduser(state = initialState, action) {
  switch (action.type) {
    case h.GET_CART_DATA:
      return {
        ...state,
        ...action.payload
      }
      
    case h.GET_CATEGORYS_DATA:
      return {
        ...state,
        ...action.payload
      }

    case h.GET_LOGIN_DATA:
      return {
        ...state,
        ...action.payload
      }
  }
}