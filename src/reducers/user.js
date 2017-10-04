import{
  FETCH_USER_DATA, USER_LOGIN_REQUEST
} from '../constants/user'

const initState = {
  login: {
    user_id : null,
    data    : null,
    fetching: true,
    isLogin : false,
    message : {
      show: false,
      text: null
    }
  }
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}