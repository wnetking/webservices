import{
  FETCH_COMBINATION_DATA, COMBINATION_DATA_REQUEST
} from '../constants/combinations'

const initState = {
  data        : null,
  fetching    : true,
  optionValues: {
    data    : null,
    fetching: true
  },
  allCombinations: {
    data    : null,
    fetching: true
  }
}

export default function combinationsReducer(state = initState, action) {
  switch (action.type) {
    case COMBINATION_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_COMBINATION_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}