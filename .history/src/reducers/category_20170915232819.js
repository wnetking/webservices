import{
  FETCH_CATEGORY_DATA, CATEGORY_DATA_REQUEST
} from '../constants/category'

const initState = {
  data    : null,
  fetching: true
}

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case CATEGORY_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_CATEGORY_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}