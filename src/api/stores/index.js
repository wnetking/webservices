import config from "../config.js"

const stores = {
  getAllStores(){
    return fetch(`${config.apiUrl}stores/` +
      `?display=[id,name,latitude,longitude,address1]` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.stores;
      })
  }
}

export default stores;