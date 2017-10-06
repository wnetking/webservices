import{
  FETCH_USER_DATA, USER_LOGIN_REQUEST,USER_REGISTRATION_REQUEST,USER_LOGOUT
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
  },
  registration:{
    fetching: false,
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
    case USER_REGISTRATION_REQUEST:
      return {
        ...state,
        ...action.payload
      }
    case USER_LOGOUT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}