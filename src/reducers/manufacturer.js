import{
  FETCH_MANUFACTURER_DATA, MANUFACTURER_DATA_REQUEST
} from '../constants/manufacturer'

const initState = {
  data    : null,
  fetching: true,
  info    : {
    data    : null,
    fetching: true
  },
  page    : {
    data    : null,
    fetching: true
  }
}

export default function manufacturersReducer(state = initState, action) {
  switch (action.type) {
    case MANUFACTURER_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_MANUFACTURER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}