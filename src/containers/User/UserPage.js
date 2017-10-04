import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Redirect} from 'react-router-dom'
import {Col, Button, Form, FormGroup, Label, Input, Alert} from 'reactstrap';

import {loginUser} from '../../actions/userActions'

class UserPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let {loginUser} = this.props
    let data = new FormData(document.querySelector('#login-form'));

    loginUser(data);
  }

  render() {
    let {login} = this.props.userState

    return (
     <div>
       User Page
     </div>
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
    loginUser: bindActionCreators(loginUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);