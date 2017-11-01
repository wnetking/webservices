import config from "../config.js"

const manufacturer = {
  getInfo(id){
    return fetch(`${config.apiUrl}/manufacturers/` +
      `?display=[id,name]&filter[id]=[${id}]` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => d.manufacturers[0])
  },

  getOne(id){
    return fetch(`${config.apiUrl}/manufacturers/${id}/?ws_key=${config.apiKey}&${config.dataType}`)
    .then(function (response) {
      return response.json();
    }).then(d => d.manufacturer)
  },

  getFilterManufacturersList(limit = null){
    return fetch(`${config.apiUrl}/manufacturers/` +
      `?display=[id,name,link_rewrite]` +
      `&filter[active]=[1]` +
      `${limit !== null ? `&limit=${limit}` : ``}` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.manufacturers;
      })
  }
}

export default manufacturer;