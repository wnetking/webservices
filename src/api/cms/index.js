import GET from '../GET'
import config from "../config.json"
let get = new GET('content_management_system');

const cms = {
  getCmsData(id) {
    return get.one(id);
  },

  getCmsList(){
    return fetch(`${config.apiUrl}content_management_system/` +
      `?display=[id,link_rewrite,meta_title]` +
      `&filter[active]=[1]` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.content_management_system
      })
  }
}

export default cms;