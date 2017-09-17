import config from "../config.json"
import { products } from '../products/'
import GET from '../GET'
let get = new GET('categories');
let P = Promise;

export const category = {

  getProductsByCategoryId(id) {
    let returnData = [];

    return new P((resolve, reject) => {

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

      }).catch(err => { reject(err) });
    })
  },
  getInfo(id) {
    return get.one(id);
  },

  all() {
    return get.collections().then(d => d.filter(item => {
      if (parseInt(item.active, 10) === 1 && (item.link_rewrite !== 'root' || item.link_rewrite !== 'root')) {
        return true;
      }
    }))
  }
}