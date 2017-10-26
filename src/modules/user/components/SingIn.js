import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import { fetchLoginRequest, resetError } from '../actions'

class SingIn extends Component {
  componentDidMount () {
    this.props.resetError()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { fetchLoginRequest } = this.props
    let data = new FormData(document.querySelector('#login-form'));

    data.append('action', 'login')

    fetchLoginRequest(data);
  }

  render() {
    let { error,isLogin, fetching} = this.props.user

    return (
      <Form onSubmit={this.handleSubmit} 
        id="login-form" style={{ "maxWidth": 500 }} className="mx-auto">
        {isLogin ? <Redirect to='/' /> : null}
        <h2 className="text-center mb-4">Login</h2>

        {!error.status ? null :
          <Alert color="danger">
            {error.message}  
            <Button style={{float : 'right', lineHeight: 1}} size="sm" outline color="secondary" 
                  onClick={this.props.resetError.bind(null)}>x</Button>
          </Alert>
         }

        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            {<Input type="email" name="email" id="exampleEmail" placeholder="User email" required />}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="passwd" id="examplePassword" placeholder="User password" required />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button type="submit">
              {fetching ? 'Loading...': 'Sing In'} 
            </Button>
          </Col>
        </FormGroup>
        <p className="text-center mt-3">
          <Link to="registration">No account? Create one here</Link>
        </p>
      </Form>
    );
  }
}


function mapStateToProps({ user }) {
  return {
    user: user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchLoginRequest: bindActionCreators(fetchLoginRequest, dispatch),
    resetError: bindActionCreators(resetError, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);