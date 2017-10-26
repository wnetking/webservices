import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { NavItem } from 'reactstrap'

import { fetchLoginRequest } from '../actions'

class LoginLink extends Component {
  componentDidMount () {
    let {fetchLoginRequest} = this.props
    fetchLoginRequest(null)
  }

  render () {
    let {data, isLogin} = this.props.user
    return (
      <NavItem>
        {isLogin ?
           <Link className='nav-link' to='/user'>
           {data.firstname}&nbsp;
           {data.lastname}
           </Link>
           :
           <Link className='nav-link' to='/login'> Login
           </Link>}
      </NavItem>
    )
  }
}

function mapStateToProps ({user}) {
  return {
    user: user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchLoginRequest: bindActionCreators(fetchLoginRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginLink)
