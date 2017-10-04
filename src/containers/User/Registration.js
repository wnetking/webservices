import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import { Col, Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

import { loginUser } from '../../actions/userActions'

class Registration extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let { loginUser } = this.props
    let data = new FormData(document.querySelector('#registration-form'));

    loginUser(data);
  }

  render() {
    let { login } = this.props.userState

    return (
      <Form onSubmit={this.handleSubmit} id="login-form" style={{ "maxWidth": 500 }} className="mx-auto">
        {login.isLogin ? <Redirect to='/' /> : null}
        <h2 className="text-center mb-4">Registration</h2>
        <FormGroup row>
          <Col sm={12} className="text-center">
            <p>Already have an account? <Link to="/login">Log in instead!</Link></p>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="firstName" sm={3}>First name</Label>
          <Col sm={9}>
            <Input type="text" name="firstName" id="firstName" placeholder="you first name" required />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="lastName" sm={3}>Last name</Label>
          <Col sm={9}>
            <Input type="text" name="lastName" id="lastName" placeholder="you last name" required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={3}>Email</Label>
          <Col sm={9}>
            <Input type="email" name="email" id="exampleEmail" placeholder="you email" required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={3}>Password</Label>
          <Col sm={9}>
            <Input type="password" name="passwd" id="examplePassword" placeholder="you password" required />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Birthdate" sm={3}>Birthdate</Label>
          <Col sm={9}>
            <Input type="date" name="birthday" id="Birthdate" placeholder="you birthday" />
            <FormText color="muted">Optional.</FormText>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 9, offset: 3 }}>
            <Button type="submit">Registration</Button>
          </Col>
        </FormGroup>
        {login.message.show ?
          <Alert color="warning" className="mt-4">
            {login.message.text}
          </Alert>
          : null
        }
      </Form>
    );
  }
}


function mapStateToProps({ userReducer }) {
  return {
    userState: userReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);