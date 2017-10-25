import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

// import {addProductToCart} from '../../actions/cartActions'

class AddToCart extends Component {
  render () {
    let {addProductToCart, product_id} = this.props

    return (
      <Form onSubmit={addProductToCart.bind(null, product_id)}  >
        <FormGroup>
          <Label for='quantity'>
            Email
          </Label>
          <Input
            type='number'
            name='quantity'
            id='quantity'
            placeholder='Quantity' />
        </FormGroup>
        <FormGroup>
          <Button>
            Add to cart
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

function mapStateToProps ({userReducer}) {
  return {
    userState: userReducer
  }
}
function mapDispatchToProps (dispatch) {
  return {
    // addProductToCart: bindActionCreators(addProductToCart, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart)
