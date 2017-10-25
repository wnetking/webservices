import config from '../config.json'

const user = {
  loginUser(data) {
    return fetch(`${config.postRequest.url}login.php?email=${data.get("email")}&passwd=${data.get("passwd")}`)
      .then(function (res) {
        return res.json()
      })
  },
  getUser(id) {
    return fetch(`${config.apiUrl}customers/${id}&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json()
      }).then(d => {
      return d.customer
    })
  },
  registration(data) {
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
        return user.getUser(d.user_id)
      } else if (!d.isLogin) {
        throw new Error(d.message)
      }else {
        throw new Error(d)
      }
    })
  }
}

export default user
