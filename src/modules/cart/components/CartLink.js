import React, {Component} from 'react';
import {NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getCartIdRequest} from '../actions'


class CartLink extends Component {
  componentWillMount() {
    let {getCartIdRequest} =this.props
    getCartIdRequest()
  }

  render() {
    let {data} = this.props.cart

    return (
      <NavItem>
        {data === null ?
          <span className="nav-link">Cart: 0</span> :
          <Link className="nav-link" to='/cart'>Cart: {data.associations.cart_rows.length}</Link>
        }
      </NavItem>
    )
  }
}


function mapStateToProps({cart}) {
  return {
    cart: cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCartIdRequest: bindActionCreators(getCartIdRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartLink);