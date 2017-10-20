import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

// import { loginUser } from '../../actions/userActions'

class SingIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { loginUser } = this.props
    let data = new FormData(document.querySelector('#login-form'));

    loginUser(data);
  }

  render() {
    let { login } = this.props.user

    return (
      <Form onSubmit={this.handleSubmit} id="login-form" style={{ "maxWidth": 500 }} className="mx-auto">
        {login.isLogin ? <Redirect to='/' /> : null}
        <h2 className="text-center mb-4">Login</h2>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="User email" required />
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
            <Button type="submit">Sing In</Button>
          </Col>
        </FormGroup>
        {login.message.show ?
          <Alert color="warning" className="mt-4">
            {login.message.text}
          </Alert>
          : null
        }
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
    // loginUser: bindActionCreators(loginUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);