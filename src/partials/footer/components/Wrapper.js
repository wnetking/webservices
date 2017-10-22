import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import {CmsLinks} from '../../components/cms/'
import {CategoryLinks} from '../../components/category/'
import Contacts from '../../components/Contacts'

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-4">
        <Container className="py-5 border-top-2">
          <Row>
            <Col xs="12" sm="4">
              <CmsLinks />
            </Col>
            <Col xs="12" sm="4">
              <CategoryLinks />
            </Col>
            <Col xs="12" sm="4">
              <Contacts />
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}