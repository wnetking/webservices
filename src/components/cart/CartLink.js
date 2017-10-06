import React, {Component} from 'react';
import {NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchCartOnLoad} from '../../actions/cartActions'


class CartLink extends Component {
  componentWillMount() {
    let {fetchCartOnLoad} =this.props
    fetchCartOnLoad()
  }

  render() {
    let {cartState} = this.props

    return (
      <NavItem>
        {cartState.data === null ?
          <Link className="nav-link" to='/cart'>Cart: 0</Link> :
          <Link className="nav-link" to='/cart'>Cart: {cartState.data.associations.cart_rows.length}</Link>
        }
      </NavItem>
    )
  }
}


function mapStateToProps({cartReducer}) {
  return {
    cartState: cartReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCartOnLoad: bindActionCreators(fetchCartOnLoad, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartLink);