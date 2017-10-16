import config from "../config.json"
import { combinations } from '../combinations'
import { products } from '../products/'
let { getCombination, getOptionValues } = combinations

const cart = {
  addProduct(data) {
    return fetch(`${config.postRequest.url}updateCart.php?` +
      `update_cart=${data.cart_id}` +
      `&id_currency=${data.id_currency}` +
      `&id_lang=${data.id_lang}` +
      `&id_product=${data.id_product}` +
      `&id_product_attribute=${data.id_product_attribute}` +
      `&id_address_delivery=${data.id_address_delivery}` +
      `&id_customer=${data.id_customer}` +
      `&quantity=${data.quantity}`)
      .then(function (res) {
        return res.json();
      })
  },
  addCart(data) {
    return fetch(`${config.postRequest.url}addCart.php?` +
      `id_currency=${data.id_currency}` +
      `${typeof data.id_customer === "undefined" ? `` : `&id_customer=${data.id_customer}`}` +
      `&id_lang=${data.id_lang}` +
      `&id_product=${data.id_product}` +
      `&id_product_attribute=${data.id_product_attribute}` +
      `&id_address_delivery=${data.id_address_delivery}` +
      `&quantity=${data.quantity}`)
      .then(function (res) {
        return res.json();
      })
  },
  userCartExist(user_id = 1) {
    return fetch(`${config.apiUrl}carts/?display=[id]&filter[id_customer]=${user_id}&ws_key=${config.apiKey}&${config.dataType}`)
      .then(res => res.json())
      .then(d => typeof d.carts === "undefined" ? false : d.carts[0])
  },
  getCart(id) {
    return fetch(`${config.apiUrl}carts/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(res => res.json())
      .then(d => d.cart);
  },

  getCartItemData(id_product, id_product_attribute, quantity = 0) {
    return new Promise((resolve, reject) => {
      getCombination(id_product_attribute).then(d => {
        getOptionValues(d.associations.product_option_values).then(data => {
          products.getProductInfo(id_product).then(product_d => {
            let img = typeof d.associations.images === "undefined" ?
             [{ id: product_d[0].id_default_image }] : d.associations.images.slice();
            resolve([{
              images: img,
              product_option_values: data,
              quantity: quantity,
              id_product: id_product,
              product_info: product_d
            }])
          })
        })
      }).catch(reject);
    });
  }
}

export default cart;