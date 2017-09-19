import{
  CMS_IMAGE_SLIDER_REQUEST, FETCH_IMAGE_SLIDER_DATA
} from '../constants/imageslider'

const initState = {
  data    : null,
  fetching: true
}

export default function imagesliderReducer(state = initState, action) {
  switch (action.type) {
    case CMS_IMAGE_SLIDER_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_IMAGE_SLIDER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}