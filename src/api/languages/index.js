import config from "../config.json"

const languages  = {
  getAll(){
    return fetch(`${config.apiUrl}/languages /?display=full
    &filter[active]=1
    &ws_key=${config.apiKey}&${config.dataType}`.replace(/\s+/g, ''))
    .then(res => res.json()).then(d => d.languages)
  }
}

export default languages ;