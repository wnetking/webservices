import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import {getCartItemData} from '../../actions/cartActions'


class CartItem extends Component {
  // componentDidMount(){
  //   let {getCartItemData} = this.props;
  //   let {id_product, id_product_attribute, quantity} = this.props.product;

  //   getCartItemData(id_product, id_product_attribute, quantity);
  // }

  render() {
    let item = this.props.product

    return (
      <div>
        {/* {item.id_product} */}
        {/* {item.id_product_attribute} */}
        {/* {item.id_address_delivery} */}
        {item.quantity}
      </div>
    )
  }
}

function mapStateToProps({ cartReducer }) {
  return {
    // userState: userReducer,
    // cart: cartReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // getCartItemData: bindActionCreators(getCartItemData, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);