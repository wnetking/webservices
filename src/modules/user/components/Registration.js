import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link, Redirect} from 'react-router-dom'
import {Col, Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap';

// import {registrationUser} from '../../actions/userActions'

class Registration extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let {registrationUser} = this.props
    let data = new FormData(document.querySelector('#registration-form'));

    registrationUser(data);
  }

  render() {
    let {login, registration} = this.props.user

    return (
      <Form onSubmit={this.handleSubmit} id="registration-form" style={{ "maxWidth": 500 }} className="mx-auto">
        {login.isLogin ? <Redirect to='/'/> : null}
        <h2 className="text-center mb-4">Registration</h2>
        <FormGroup row>
          <Col sm={12} className="text-center">
            <p>Already have an account? <Link to="/login">Log in instead!</Link></p>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3}>
            Social title
          </Col>
          <Col sm={9}>
            <Label check>
              <Input type="radio" name="id_gender" className="mr-1" value="1"/>{'Mr.'}
            </Label>
            <Label check>
              <Input type="radio" name="id_gender" className="ml-2 mr-1" value="0"/>{'Mrs.'}
            </Label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="firstName" sm={3}>First name</Label>
          <Col sm={9}>
            <Input type="text" name="firstname" id="firstName" placeholder="you first name" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lastName" sm={3}>Last name</Label>
          <Col sm={9}>
            <Input type="text" name="lastname" id="lastName" placeholder="you last name" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={3}>Email</Label>
          <Col sm={9}>
            <Input type="email" name="email" id="exampleEmail" placeholder="you email" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={3}>Password</Label>
          <Col sm={9}>
            <Input type="password" name="passwd" id="examplePassword" placeholder="you password" required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Birthdate" sm={3}>Birthdate</Label>
          <Col sm={9}>
            <Input type="text" name="birthday" id="Birthdate" placeholder="you birthday"/>
            <FormText color="muted">Optional.</FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={{ size: 9, offset: 3 }}>
            <Label check>
              <Input type="checkbox" name="optin" value="1"/>{' '}
              Receive offers from our partners
            </Label>
          </Col>
          <Col sm={{ size: 9, offset: 3 }}>
            <Label check>
              <Input type="checkbox" name="newsletter" value="1"/>{' '}
              Sign up for our newsletter
            </Label>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 9, offset: 3 }}>
            <Button type="submit">Registration</Button>
          </Col>
        </FormGroup>
        {registration.fetching ?
          <Alert color="info" className="mt-4">
            Loading... Registration in progress.
          </Alert>
          : null
        }
        {registration.message.show ?
          <Alert color="warning" className="mt-4">
            {registration.message.text}
          </Alert>
          : null
        }
      </Form>
    );
  }
}

function mapStateToProps({user}) {
  return {
    user: user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // registrationUser: bindActionCreators(registrationUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);