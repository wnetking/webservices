import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'reactstrap';

import Header from 'partials/header'
import Home from './home'

class Layout extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <Router>
        <main className="d-flex flex-column">
          <Header.components.Wrapper />
          <Route exact path="/" component={Home}/>
          <Container className="flex-grow-1 mt-5">
            {/* <Route path="/:id-:name" component={Product}/>
            <Route path="/cms/:id-:name" component={CmsPage}/>
            <Route path="/category/:id-:name" component={CategoryPage}/>
            <Route path="/manufacturer/:id-:name" component={ManufacturerPage}/>
            <Route path="/login" component={SingIn}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/user" component={UserPage}/>
            <Route path="/cart" component={CartPage}/> */}
          </Container>
          {/* <Footer /> */}
        </main>
      </Router>
    );
  }
}

function mapStateToProps({generalReducer}) {
  return {
    general: generalReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // generalActions : bindActionCreators(generalActions, dispatch),
    // requestLogin   : bindActionCreators(requestLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);