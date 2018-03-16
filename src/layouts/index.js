import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from 'partials/header';
import Footer from 'partials/footer';
import Home from './home';
import Product from './product';
import { CartPage } from 'modules/cart/components';
import { SingIn, Registration } from 'modules/user/components';
import { ManufacturerPage } from 'modules/manufacturers/components';
import { CategoryPage } from 'modules/category/components';
import { CmsPage } from 'modules/cms/components';
import { UserPage } from 'modules/user/components';
import Maintance from '../partials/Maintance';
import config from '../api/config';

class Layout extends Component {
  render() {
    if (!config.apiKey) {
      return <Maintance />;
    }

    return (
      <Router basename={config.routePath}>
        <main className="d-flex flex-column">
          <Header.components.Wrapper />
          <Route exact path="/" component={Home} />
          <Container className="flex-grow-1 mt-5">
            <Route path="/product/:id-:name" component={Product} />
            <Route path="/category/:id-:name" component={CategoryPage} />
            <Route
              path="/manufacturer/:id-:name"
              component={ManufacturerPage}
            />
            <Route path="/cms/:id-:name" component={CmsPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={SingIn} />
            <Route path="/user" component={UserPage} />
          </Container>
          <Footer.components.Wrapper />
        </main>
      </Router>
    );
  }
}

let mapStateToProps = ({ generalReducer }) => ({
  general: generalReducer
});

export default connect(mapStateToProps)(Layout);
