import GET from '../GET'
import config from "../config.json"
let get = new GET('manufacturers');

export const manufacturer = {
  getInfo(id){
    return fetch(`${config.apiUrl}/manufacturers/` +
    `?display=[id,name]&filter[id]=[${id}]`+
    `&ws_key=${config.apiKey}&${config.dataType}`)
    .then(function (response) {
      return response.json();
    }).then(d =>  d.manufacturers[0])
  },
  all(){
    return get.collections();
  }
}