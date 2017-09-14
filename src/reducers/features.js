import{
  FETCH_FEATURES_DATA, FEATURES_DATA_REQUEST
} from '../constants/features'

const initState = {
  data    : null,
  fetching: true
}

export default function featuresReducer(state = initState, action) {
  switch (action.type) {
    case FEATURES_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_FEATURES_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}