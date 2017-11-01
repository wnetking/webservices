import config from "../config.js"

const contacts = {
  all() {
    return fetch(`${config.apiUrl}contacts/` +
      `?display=[id,name,email,description]` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.contacts;
      })
  }
}

export default contacts;