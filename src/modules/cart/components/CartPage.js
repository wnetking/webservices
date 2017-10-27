import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col, Row, ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { addCartItemRequest } from '../actions'

class CartPage extends Component {
  componentDidMount () {
    let { addCartItemRequest, cart } = this.props

    if (cart.data !== null) {
      if (cart.data.associations.cart_rows.length) {
        cart.data.associations.cart_rows.forEach(item => {
          addCartItemRequest(item)
        })
      }
    }
  }

  componentDidUpdate () {
    // let { getCartItemData, cart } = this.props

    // if (cart.data !== null && cart.cartItems.length === 0) {
    //     if (cart.data.associations.cart_rows.length && cart.cartItems.length === 0) {
    //         cart.data.associations.cart_rows.map((item, key) => {
    //             getCartItemData(item.id_product, item.id_product_attribute, item.quantity)
    //             return true
    //         })
    //     }
    // }
  }

  render () {
    let { cartItems, data, fetching } = this.props.cart

    return (
      <div>
        {data === null ?
           'Sorry, in you cart did not products' :
         
           cartItems.length ?
             <Row>
               <Col sm={6}>
               <ListGroup>
                 {cartItems.map((item, key) => (
                    <CartItem key={key} product={item} />
                  ))}
               </ListGroup>
               </Col>
               <Col sm={6}>
                <h2>Products in carts {cartItems.length}</h2>
               {fetching ? 'loading...' : null}
               </Col>
             </Row>
         
             :
             null}
      </div>
    )
  }
}

function mapStateToProps ({ user, cart }) {
  return {
    user: user,
    cart: cart
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCartItemRequest: bindActionCreators(addCartItemRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
