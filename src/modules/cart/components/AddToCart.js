import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Redirect} from 'react-router-dom'
import {Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

import {addProductToCart} from '../../actions/cartActions'

class AddToCart extends Component {
  render() {
    let {addProductToCart, product_id} = this.props

    return (
      <Button onClick={addProductToCart.bind(null,product_id)} className="mb-2">
        Add to cart
      </Button>
    );
  }
}


function mapStateToProps({userReducer}) {
  return {
    userState: userReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addProductToCart: bindActionCreators(addProductToCart, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);