import config from "../config.json"

const cart = {
  addProduct(data){
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
  addCart(data){
    return fetch(`${config.postRequest.url}addCart.php?` +
      `id_currency=${data.id_currency}` +
      `&id_customer=${data.id_customer}` +
      `&id_lang=${data.id_lang}` +
      `&id_product=${data.id_product}` +
      `&id_product_attribute=${data.id_product_attribute}` +
      `&id_address_delivery=${data.id_address_delivery}` +
      `&quantity=${data.quantity}`)
      .then(function (res) {
        return res.json();
      })
  },
  userCartExist(user_id = 1){
    return fetch(`${config.apiUrl}carts/?display=[id]&filter[id_customer]=${user_id}&ws_key=${config.apiKey}&${config.dataType}`)
      .then(res => res.json())
      .then(d => typeof d.carts === "undefined" ? false : d.carts[0])
  },
  getCart(id){
    return fetch(`${config.apiUrl}carts/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(res => res.json())
      .then(d => d.cart);
  }
}

export default cart;