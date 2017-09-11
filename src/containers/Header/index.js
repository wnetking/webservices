import React, {Component} from 'react';
import {Container} from 'reactstrap';
import NavBar from '../../components/NavBar'

export default class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <NavBar />
        </Container>
      </header>
    )
  }
}