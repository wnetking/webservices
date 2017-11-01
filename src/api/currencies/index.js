import config from "../config.js"

const currencies = {
  getAll(){
    return fetch(`${config.apiUrl}/currencies/?display=full
    &filter[active]=1
    &ws_key=${config.apiKey}&${config.dataType}`.replace(/\s+/g, ''))
    .then(res => res.json()).then(d => d.currencies)
  }
}

export default currencies;