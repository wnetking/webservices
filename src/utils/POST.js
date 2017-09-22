import X2JS from 'x2js';
import config from "./config.json"

let x2js = new X2JS();

export default class POST {
  constructor(name) {
    this.name = name;
  }

  getBlank() {
    return fetch(`${config.apiUrl}/${this.name}?debug=True&schema=blank&ws_key=${config.apiKey}`)
      .then((response) => {return response.text();})
      .then(d => x2js.xml2js(d))
  }
}