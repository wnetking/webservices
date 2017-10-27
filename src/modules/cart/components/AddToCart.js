import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { addToCartRequest } from '../actions'

class AddToCart extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let {addToCartRequest, product_id, cart,user, 
         currencies, languages, combinations} = this.props
    let data = new FormData(document.querySelector(`#add-to-cart-${product_id}`));
    
    data.append('id_product', product_id)
    data.append('id_address_delivery', product_id)
    data.append('id_currency', currencies.data[currencies.active].id)
    data.append('id_lang', languages.data[languages.active].id)

    if(combinations.data !== null && typeof combinations.data !== "undefined"){
      data.append('id_product_attribute', combinations.data.id)
    }

    if(user.user_id !== null){
      data.append('id_customer', user.user_id)
    }

    if(cart.cart_id === null){
      data.append('action', "add_cart")
    }else{
      data.append("action", "update_cart")
      data.append("id_cart", cart.cart_id)
    }

    addToCartRequest(data); 
  }

  render () {
    let {product_id} = this.props

    return (
      <Form onSubmit={this.handleSubmit} inline className='mb-4' id={`add-to-cart-${product_id}`}>
        <FormGroup className='mr-2' style={{maxWidth: 100}}>
          <Input
            type='number'
            name='quantity'
            defaultValue="1"
            min="1"
            placeholder="1"
            style={{width: '100%'}} />
        </FormGroup>
        <FormGroup>
          <Button type="submit">
            Add to cart
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

function mapStateToProps ({user, cart, currencies, languages, combinations}) {
  return {
    user: user,
    cart: cart,
    currencies: currencies,
    languages: languages,
    combinations: combinations 
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addToCartRequest: bindActionCreators(addToCartRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
