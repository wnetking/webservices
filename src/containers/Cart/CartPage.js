import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import CartItem from './CartItem'
import { images } from '../../api/images/'
import { addProductToCart } from '../../actions/cartActions'
import { getCartItemData } from '../../actions/cartActions'

class CartPage extends Component {
    // componentDidMount() {
    //     let { getCartItemData, cart } = this.props;
    //     // let { id_product, id_product_attribute, quantity } = this.props.product;

    //     if (cart.data !== null && cart.cartItems.length < 1) {
    //         if (cart.data.associations.cart_rows.length &&
    //             cart.data.associations.cart_rows.length >= cart.cartItems.length) {
    //             cart.data.associations.cart_rows.map((item, key) => {
    //                 getCartItemData(item.id_product, item.id_product_attribute, item.quantity);
    //             })
    //         }
    //     }
    // }

    componentDidUpdate() {
        let { getCartItemData, cart } = this.props;

        if (cart.data !== null && cart.cartItems.length === 0) {
            if (cart.data.associations.cart_rows.length && cart.cartItems.length === 0) {
                cart.data.associations.cart_rows.map((item, key) => {
                    getCartItemData(item.id_product, item.id_product_attribute, item.quantity);
                })
            }
        }
    }

    render() {
        let { cart } = this.props

        return (
            <div> {
                cart.data === null ?
                    'Sorry, in you cart did not products' :
                    cart.cartItems.length ?
                        cart.cartItems.map((item, key) => (
                            <CartItem key={key} product={item} />
                        )) :
                        null
            } </div>
        );
    }
}

function mapStateToProps({ userReducer, cartReducer }) {
    return {
        userState: userReducer,
        cart: cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCartItemData: bindActionCreators(getCartItemData, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);