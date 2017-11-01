import GET from '../GET'
import config from "../config.js"
let get = new GET('products');
let getCategory = new GET('categories');

const products = {
  all() {
    return get.collections();
  },
  one(id) {
    return fetch(`${config.apiUrl}/products/${id}/?ws_key=${config.apiKey}&${config.dataType}`)
          .then(res => res.json()).then(d => d.product)
  },
  selected(array) {
    return get.selected(array);
  },
  getProductCategoryName(id) {
    return getCategory.one(id);
  },
  getFilterProductsList(limit = null, category = null, manufacturer = null, products = null){
    if( Array.isArray(products)){
      var productsRequestString = products.join('|');
    }

    return fetch(`${config.apiUrl}/products/` +
    `?display=[id,id_default_image,price,wholesale_price,name,show_price,link_rewrite]` +
    `&filter[active]=[1]` +
    `${category !== null ?  `&filter[id_category_default]=[${category}]` : ``}` +
    `${manufacturer !== null ?  `&filter[id_manufacturer]=[${manufacturer}]` : ``}` +
    `${products !== null ?  `&filter[id]=[${productsRequestString}]` : ``}` +
    `${limit !== null ?  `&limit=${limit}` : ``}` +
    `&ws_key=${config.apiKey}&${config.dataType}`)
    .then(function (response) {
      return response.json();
    }).then(d => {
      return d.products;
    })
  },

  getProductInfo(id){
    return fetch(`${config.apiUrl}/products/` +
    `?display=[id_default_image,price,wholesale_price,name,show_price,link_rewrite]` +
    `&filter[active]=[1]&filter[id]=${id}` +
    `&ws_key=${config.apiKey}&${config.dataType}`)
    .then(function (response) {
      return response.json();
    }).then(d => {
      return d.products;
    })
  }
}

export default products;