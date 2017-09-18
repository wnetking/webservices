import{
  FETCH_CONTACTS_DATA, CMS_CONTACTS_REQUEST
} from '../constants/contacts'

const initState = {
  data    : null,
  fetching: true
}

export default function contactsReducer(state = initState, action) {
  switch (action.type) {
    case CMS_CONTACTS_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_CONTACTS_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}