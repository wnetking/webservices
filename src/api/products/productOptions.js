export const productOptions = {
  all(){
    return new Promise((resolve, reject) => {
      let returnData = [];

    })
  },

  getOptionsId(){
    return fetch(`${config.apiUrl}/product_options?ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      });
  },
  getOptionData(id){
    return fetch(`${config.apiUrl}/product_options/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      });
  },

  getOption(id){
    let returnData = [];


    return fetch(`${config.apiUrl}/product_option_values/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      });
  },

  getOptionsValueId(){
    return fetch(`${config.apiUrl}/product_option_values?ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      });
  },
}
