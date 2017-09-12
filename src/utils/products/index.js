import config from "../config.json"

export const products = {
  all() {
    return new Promise((resolve, reject) => {
      let returnData = [];

      fetch(`${config.apiUrl}/products/?ws_key=${config.apiKey}&${config.dataType}`)
        .then((response) => {return response.json();})
        .then(data => {
          data.products.forEach((item, index)=> {
            this.one(item.id).then(item => {
              returnData.push(item.product);

              if (index === data.products.length - 1) {
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