import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from '../Header/'
import Footer from '../Footer/'
import ProductList from '../../components/ProductList'
import Product from '../Product/'
import {CmsPage} from '../../components/cms/'
import {CategoryPage} from '../../components/category/'
import Manufacturers from '../../components/manufacturers/Manufacturers'
import Stores from '../../components/Stores'

import * as productsActions from '../../actions/productsActions'

class Page extends Component {
  componentWillMount() {
  }

  render() {
    let {productsActions} = this.props
    let {productPage} = this.props.productsState

    return (
      <Router>
        <main className="d-flex flex-column">
          <Header />
          <Route exact path="/" render={() => (
              <div className="flex-grow-1">
                <Container className="flex-grow-1 mb-5">
                  <h2 className="text-center mb-4">All Products</h2>
                  <ProductList />
                </Container>
                <Stores />
                <Container className="flex-grow-1">
                  <h2 className="text-center mb-4">Brands</h2>
                  <Manufacturers/>
                </Container>
              </div>
              )
            }/>
          <Container className="flex-grow-1">
            <Route path="/:id-:name" render={({ match }) => (
              <Product match={match} data={productPage} productsActions={productsActions} />
            )}/>
            <Route path="/cms/:id-:name" component={CmsPage}/>
            <Route path="/category/:id-:name" component={CategoryPage}/>
          </Container>
          <Footer />
        </main>
      </Router>
    );
  }
}

function mapStateToProps({productsReducer}) {
  return {
    productsState: productsReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);

