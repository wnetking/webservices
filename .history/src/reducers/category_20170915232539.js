import{
  FETCH_CMS_DATA, CMS_DATA_REQUEST
} from '../constants/cms'

const initState = {
  data    : null,
  fetching: true
}

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case CMS_DATA_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_CMS_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}