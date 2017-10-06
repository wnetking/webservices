import{
  FETCH_USER_DATA, USER_LOGIN_REQUEST, USER_REGISTRATION_REQUEST, USER_LOGOUT
} from '../constants/user'

import user from '../utils/user/'
import localStorage from '../utils/localStorage/'

export function loginUser(data) {
  return (dispatch) => {
    dispatch({
      type   : USER_LOGIN_REQUEST,
      payload: {
        login: {
          data    : null,
          fetching: true,
          isLogin : false,
          message : {
            show: false,
            text: null
          }
        }
      }
    })

    user.loginUser(data).then(d => {
      if (d.isLogin) {

        user.getUser(d.user_id).then(data => {
          localStorage.add('user_id', d.user_id);

          dispatch({
            type   : FETCH_USER_DATA,
            payload: {
              login: {
                data    : data,
                fetching: false,
                isLogin : d.isLogin,
                message : {
                  show: false,
                  text: null
                }
              }
            }
          })
        })
      } else {
        dispatch({
          type   : USER_LOGIN_REQUEST,
          payload: {
            login: {
              data    : null,
              fetching: true,
              isLogin : false,
              message : d.message
            }
          }
        })
      }
    });
  }
}

export function requestLogin() {
  return (dispatch) => {
    if (localStorage.get('user_id')) {
      user.getUser(localStorage.get('user_id')).then(data => {
        dispatch({
          type   : FETCH_USER_DATA,
          payload: {
            login: {
              data    : data,
              fetching: false,
              isLogin : true,
              message : {
                show: false,
                text: null
              }
            }
          }
        })
      })
    }
  }
}

export function registrationUser(data) {
  return (dispatch) => {
    dispatch({
      type   : USER_REGISTRATION_REQUEST,
      payload: {
        registration: {
          fetching: true,
          message : {
            show: false,
            text: null
          }
        }
      }
    })
    user.registration(data).then(d => {
      if (d.isLogin) {
        user.getUser(d.user_id).then(data => {
          localStorage.add('user_id', d.user_id);

          dispatch({
            type   : FETCH_USER_DATA,
            payload: {
              login: {
                data    : data,
                fetching: false,
                isLogin : d.isLogin,
                message : {
                  show: false,
                  text: null
                }
              }
            }
          })
        })
      } else {
        dispatch({
          type   : USER_REGISTRATION_REQUEST,
          payload: {
            registration: {
              fetching: false,
              message : d.message
            }
          }
        })
      }
    });
  }
}

export function logoutUser() {
  return (dispatch)=> {
    localStorage.remove('user_id');

    dispatch({
      type   : USER_LOGOUT,
      payload: {
        login       : {
          user_id : null,
          data    : null,
          fetching: true,
          isLogin : false,
          message : {
            show: false,
            text: null
          }
        },
        registration: {
          fetching: false,
          message : {
            show: false,
            text: null
          }
        }
      }
    })
  }
}