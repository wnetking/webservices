import config from "../config.json"

const user = {
  loginUser(data){
    return fetch(`${config.postRequest.url}login.php?email=${data.get("email")}&passwd=${data.get("passwd")}`)
      .then(function (res) {
        return res.json();
      })
  },
  getUser(id){
    return fetch(`${config.apiUrl}customers/${id}&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.customer;
      })
  }
}

export default user;