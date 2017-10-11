import {
  FETCH_CART_DATA, CART_DATA_REQUEST, CART_ITEM_DATA_REQUEST
} from '../constants/cart'

import localStorage from '../utils/localStorage/'
import cart from '../utils/cart/'
import help from '../utils/helper'


export function addProductToCart(id) {
  return (dispatch, getState) => {

    if (help.isNull(getState().userReducer.login.data)) {
      //add new cart with product and get cart id
      cart.addCart({
        id_currency: 1,
        id_lang: 1,
        id_product: id,
        id_product_attribute: getState().combinationsReducer.data.id,
        id_address_delivery: 1,
        quantity: 1
      }).then(d => {
        console.log(d);
      })
    } else {
      //update cart if user have it
      cart.userCartExist(getState().userReducer.login.data.id).then(d => {
        if (d) {
          localStorage.add('cart_id', d.id);
          cart.addProduct({
            cart_id: d.id,
            id_currency: 1,
            id_lang: 1,
            id_product: id,
            id_product_attribute: getState().combinationsReducer.data.id,
            id_address_delivery: 1,
            id_customer: getState().userReducer.login.data.id,
            quantity: 1
          }).then(data => {
            cart.getCart(d.id).then(d => {
              dispatch({
                type: FETCH_CART_DATA,
                payload: {
                  data: d
                }
              })
            })
          });
        } else {
          cart.addCart({
            id_customer: getState().userReducer.login.data.id,
            id_currency: 1,
            id_lang: 1,
            id_product: id,
            id_product_attribute: getState().combinationsReducer.data.id,
            id_address_delivery: 1,
            quantity: 1
          }).then(d => {
            localStorage.add('cart_id', d.id_cart);

            cart.getCart(d.id_cart).then(data => {
              dispatch({
                type: FETCH_CART_DATA,
                payload: {
                  data: data,
                  cart_id: d.id_cart,
                }
              })
            })
          })
        }
      })
    }
  }
}

export function fetchCartOnLoad() {
  return (dispatch) => {
    if (localStorage.get('cart_id')) {
      cart.getCart(localStorage.get('cart_id')).then(d => {
        dispatch({
          type: FETCH_CART_DATA,
          payload: {
            cart_id: localStorage.get('cart_id'),
            data: d
          }
        })
        console.log(d);
      })
    }
  }
}

export function getCartItemData(id_product, id_product_attribute, quantity) {
  return (dispatch, getState) => {
    cart.getCartItemData(id_product, id_product_attribute, quantity).then(d => {

      console.log([].concat(getState().cartReducer.cartItems, d));

      dispatch({
        type: CART_ITEM_DATA_REQUEST,
        payload: {
          cartItems: [].concat(getState().cartReducer.cartItems, d)
        }
      })
    })
  }
}