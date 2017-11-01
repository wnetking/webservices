import config from "../config.js"

const general = {
  getActiveCurrency(){
    return fetch(`${config.apiUrl}currencies/` +
      `?display=[name,iso_code,conversion_rate]` +
      `&filter[active]=[1]` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.currencies[0]
      })
  }
}

export default general;