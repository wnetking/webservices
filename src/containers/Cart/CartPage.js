import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Redirect} from 'react-router-dom'
import {Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

import {addProductToCart} from '../../actions/cartActions'

class CartPage extends Component {
  render() {
    let {addProductToCart} = this.props

    return (
      <div>Cart </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);