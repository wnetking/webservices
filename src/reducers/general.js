import{
  FETCH_GENERAL_DATA, GENERAL_DATA_REQUEST
} from '../constants/general'

const initState = {
  currencies: {
    data    : null,
    fetching: true
  }
}

export default function generalReducer(state = initState, action) {
  switch (action.type) {
    case GENERAL_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_GENERAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}