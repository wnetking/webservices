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
  },
  registration(data){
    return fetch(`${config.postRequest.url}addCustomer.php?` +
      `email=${data.get("email")}&passwd=${data.get("passwd")}` +
      `&lastname=${data.get("lastname")}&firstname=${data.get("firstname")}` +
      `${typeof data.get("birthday") === "" ? `` : `&birthday=${data.get("birthday")}`}` +
      `${typeof data.get("id_gender") === null ? `` : `&id_gender=${data.get("id_gender")}`}` +
      `${typeof data.get("optin") === null ? `` : `&optin=${data.get("optin")}`}` +
      `${typeof data.get("newsletter") === null ? `` : `&newsletter=${data.get("newsletter")}`}`
    )
      .then(function (res) {
        return res.json();
      })
  }
}

export default user;