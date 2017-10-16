import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'reactstrap';

import Header from '../Header/'
import Footer from '../Footer/'
import ProductList from '../../components/ProductList'
import Product from '../Product/'
import {CmsPage} from '../../components/cms/'
import {CategoryPage} from '../../components/category/'
import Manufacturers from '../../components/manufacturers/Manufacturers'
import ManufacturerPage from '../../components/manufacturers/ManufacturerPage'
import Stores from '../../components/Stores'
import {SingIn, UserPage, Registration} from '../User/'
import {CartPage} from '../Cart/'
import ImageSlider from '../../components/imageslider/ImageSlider'


import * as generalActions from '../../actions/generalActions'
import {requestLogin} from '../../actions/userActions'


class Page extends Component {
  componentWillMount() {
    let {generalActions, requestLogin} = this.props

    generalActions.getActiveCurrency();
    requestLogin();
    
  }

  render() {
    return (
      <Router>
        <main className="d-flex flex-column">
          <Header />
          <Route exact path="/" render={() => (
              <div className="flex-grow-1">
                {/* <ImageSlider /> */}
                <Container className="flex-grow-1 mb-5">
                  {/* <h2 className="text-center mb-4">All Products</h2> */}
                  {/* <ProductList limit={6} categoryID={null} manufacturerID={null} /> */}
                </Container>
                {/* <Stores /> */}
                <Container className="flex-grow-1">
                  {/* <h2 className="text-center mb-4">Brands</h2> */}
                  {/* <Manufacturers limit={null}/> */}
                </Container>
              </div>
              )
            }/>
          {/* <Container className="flex-grow-1 mt-5">
            <Route path="/:id-:name" component={Product}/>
            <Route path="/cms/:id-:name" component={CmsPage}/>
            <Route path="/category/:id-:name" component={CategoryPage}/>
            <Route path="/manufacturer/:id-:name" component={ManufacturerPage}/>
            <Route path="/login" component={SingIn}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/user" component={UserPage}/>
            <Route path="/cart" component={CartPage}/>
          </Container>
          <Footer /> */}
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
    generalActions : bindActionCreators(generalActions, dispatch),
    requestLogin   : bindActionCreators(requestLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);