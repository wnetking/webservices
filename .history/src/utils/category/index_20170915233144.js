import config from "../config.json"
import {products} from '../products/'
category

export const category = {

  getProductsByCategoryId(id){
    let returnData = [];

    return new Promise((resolve, reject) => {

      this.getInfo(id).then(data => {
        if (data.category.associations.products.length === 1) {
          return resolve(null);
        }

        data.category.associations.products.forEach(item => {
          products.one(item.id).then(item => {

            returnData.push(item.product);

            if (returnData.length === data.category.associations.products.length) {
              return resolve(returnData);
            }
          })
        })

      }).catch(err => {reject(err)});
    })
  },
  getInfo(id){
    return fetch(`${config.apiUrl}/categories/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(response => {
        return response.json();
      });
  }
}