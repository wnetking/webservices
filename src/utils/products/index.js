import config from "../config.json"

export const products = {
  all() {
    return new Promise((resolve, reject) => {
      let returnData = [];

      fetch(`${config.apiUrl}/products/?ws_key=${config.apiKey}&${config.dataType}`)
        .then((response) => {return response.json();})
        .then(data => {
          data.products.forEach((item)=> {
            this.one(item.id).then(item => {
              returnData.push(item.product);

              if (returnData.length === data.products.length) {
                resolve(returnData);
              }
            })
          })
        }).catch(err => {
        reject(err);
      })
    })

  },
  one(id){
    return fetch(`${config.apiUrl}/products/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      });
  },

  getProductCategoryName(id){
    return fetch(`${config.apiUrl}/categories/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      });
  }
}