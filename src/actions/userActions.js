import{
  FETCH_USER_DATA, USER_LOGIN_REQUEST
} from '../constants/user'

import user from '../utils/user/'

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