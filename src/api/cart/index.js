import config from '../config.js'
import combinations from '../combinations'
import products from '../products/'
import cookie from '../cookie'
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
      return cart.getCart(d.id_cart).then(d => {
        if (typeof cookie.get('cart_session') === 'undefined') {
          cookie.del('cart_session')
          cookie.set('cart_session', d.secure_key)
        }

        return d
      })
    })
  },

  getCartIdBySecureKey(key) {
    return fetch(`${config.apiUrl}carts/?display=[id]
    &filter[secure_key]=[${key}]
    &ws_key=${config.apiKey}&${config.dataType}`.replace(/\s+/g, ''))
      .then((response) => response.json())
      .then(d => d.carts[0])
  },

  getCartId() {
    if (typeof cookie.get('cart_session') !== 'undefined') {
      return cart.getCartIdBySecureKey(cookie.get('cart_session')).then(d => {
        return cart.getCart(d.id);
      })
    }else{
      throw new Error('No cart session');
    }
  },

  getCart(id) {
    return fetch(`${config.apiUrl}carts/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(res => res.json())
      .then(d => d.cart)
  },

  getCartItemData(item) {
    return new Promise((resolve, reject) => {
      getCombination(item.id_product_attribute).then(d => {
        getOptionValues(d.associations.product_option_values).then(data => {
          products.getProductInfo(item.id_product).then(product_d => {
            let img = typeof d.associations.images === 'undefined' ?
              [{ id: product_d[0].id_default_image }] : d.associations.images.slice()
            resolve([{
              images: img,
              product_option_values: data,
              quantity: item.quantity,
              id_product: item.id_product,
              product_info: product_d
            }])
          })
        })
      }).catch(reject)
    })
  }
}

export default cart
