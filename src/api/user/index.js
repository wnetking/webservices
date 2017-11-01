import config from '../config.js'
import cookie from '../cookie'

const user = {
  getUser(id) {
    return fetch(`${config.apiUrl}customers/${id}&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json()
      }).then(d => {
      return d.customer
    })
  },

  getUserBySecureKey(key) {
    return fetch(`${config.apiUrl}customers/?display=full
    &filter[secure_key]=[${key}]
    &ws_key=${config.apiKey}&${config.dataType}`.replace(/\s+/g, ''))
      .then(function (response) {
        return response.json()
      }).then(d => {
      return d.customers[0]
    })
  },

  userRequest(data) {
    if (data !== null) {
      return fetch(`${config.postRequest.url}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
        },
        body: data
      }).then(function (res) {
        return res.json()
      }).then(d => {
        if (d.isLogin) {
          return user.getUser(d.user_id).then(d => {
            cookie.set('user_session', d.secure_key)
            return d
          })
        } else if (!d.isLogin) {
          throw new Error(d.message)
        }else {
          throw new Error(d)
        }
      })
    }else if (typeof cookie.get('user_session') !== 'undefined') {
      return user.getUserBySecureKey(cookie.get('user_session'))
    }
  },

  logout() {
    cookie.del('user_session')
    console.log(cookie.get('user_session'))
  }

}

export default user
