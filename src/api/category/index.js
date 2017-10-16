import { products } from '../products/'
import GET from '../GET'
import config from "../config.json"
let get = new GET('categories');
let P = Promise;

const category = {
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
      if (parseInt(item.active, 10) === 1 && item.link_rewrite !== 'root' && item.link_rewrite !== 'home' && parseInt(item.level_depth, 10) <= 10) {
        return true;
      } else {
        return false;
      }
    }))
  },

  getCategoryList() {
    return fetch(`${config.apiUrl}categories/
      ?display=[id,name,link_rewrite,level_depth]
      &filter[active]=[1]
      &ws_key=${config.apiKey}&${config.dataType}`.replace(/\s+/g, ''))
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.categories.filter(item => parseInt(item.level_depth, 10) > 1 ? true : false);
      })
  }
}

export default category;