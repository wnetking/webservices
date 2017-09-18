import{
  FETCH_STORES_DATA, CMS_STORES_REQUEST
} from '../constants/stores'

const initState = {
  data    : null,
  fetching: true
}

export default function storesReducer(state = initState, action) {
  switch (action.type) {
    case CMS_STORES_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_STORES_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}