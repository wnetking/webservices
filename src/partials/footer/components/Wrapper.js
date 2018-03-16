import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CmsLinks } from 'modules/cms/components';

const Footer = () => (
  <footer className="mt-4">
    <Container className="py-5 border-top-2">
      <Row>
        <Col xs="12" sm="4">
          <CmsLinks />
        </Col>
        <Col xs="12" sm="4">
          {/* <CategoryLinks /> */}
        </Col>
        <Col xs="12" sm="4">
          {/* <Contacts /> */}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
