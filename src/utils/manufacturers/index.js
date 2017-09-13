import config from "../config.json"

export const manufacturer = {
  getInfo(id){
    return fetch(`${config.apiUrl}/manufacturers/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(response => {
        return response.json();
      });
  }
}