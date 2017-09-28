import GET from '../GET'
import config from "../config.json"
let get = new GET('homeslider_slidess');

const imageslider = {
  all() {
    return fetch(`${config.apiUrl}homeslider_slidess/` +
      `?display=full` +
      `&filter[active]=[1]` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.homeslider_slidess
      })
  }
}

export default imageslider;