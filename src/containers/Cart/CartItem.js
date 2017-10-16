import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Media } from 'reactstrap';
import { images } from '../../api/images/'
// import {getCartItemData} from '../../actions/cartActions'


class CartItem extends Component {
  // componentDidMount(){
  //   let {getCartItemData} = this.props;
  //   let {id_product, id_product_attribute, quantity} = this.props.product;

  //   getCartItemData(id_product, id_product_attribute, quantity);
  // }
  // <div>
  //   {/* {item.id_product} */}
  //   {/* {item.id_product_attribute} */}
  //   {/* {item.id_address_delivery} */}
  //   {item.quantity}
  // </div>

  render() {
    let item = this.props.product

    return (
      <Media>
        <Media left href="#">
          <Media object
            src={images.productImage(item.id_product, item.images[0].id)} data-src="holder.js/100x100"
            alt={item.product_info[0].name[0].value} width='100' />
        </Media>
        <Media body>
          <Media heading>
            {item.product_info[0].name[0].value}
          </Media>
          {item.product_option_values.map((item, key) => (
            <span key={key}>
              {item.name[0].value}&nbsp;&nbsp;
            </span>
          ))}
        </Media>
      </Media>
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