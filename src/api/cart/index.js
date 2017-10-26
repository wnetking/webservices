import config from '../config.json'
import combinations from '../combinations'
import products from '../products/'
let { getCombination, getOptionValues } = combinations

const cart = {
  addProduct(data) {
    return fetch(`${config.postRequest.url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
      },
      body: data
    }).then(res => res.json()).then(d => {
      
    })
  },

  userCartExist(user_id = 1) {
    return fetch(`${config.apiUrl}carts/?display=[id]&filter[id_customer]=${user_id}&ws_key=${config.apiKey}&${config.dataType}`)
      .then(res => res.json())
      .then(d => typeof d.carts === 'undefined' ? false : d.carts[0])
  },
  
  getCart(id) {
    return fetch(`${config.apiUrl}carts/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(res => res.json())
      .then(d => d.cart)
  },

  getCartItemData(id_product, id_product_attribute, quantity = 0) {
    return new Promise((resolve, reject) => {
      getCombination(id_product_attribute).then(d => {
        getOptionValues(d.associations.product_option_values).then(data => {
          products.getProductInfo(id_product).then(product_d => {
            let img = typeof d.associations.images === 'undefined' ?
              [{ id: product_d[0].id_default_image }] : d.associations.images.slice()
            resolve([{
              images: img,
              product_option_values: data,
              quantity: quantity,
              id_product: id_product,
              product_info: product_d
            }])
          })
        })
      }).catch(reject)
    })
  }
}

export default cart
