import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from '../Header/'
import Footer from '../Footer/'
import ProductList from '../../components/ProductList'
import Product from '../Product/'
import {CmsPage} from '../../components/cms/'
import {CategoryPage} from '../../components/category/'

import * as productsActions from '../../actions/productsActions'

class Page extends Component {
  componentWillMount() {
    let {productsActions} = this.props

    //productsActions.fetchProductOption();
    //productsActions.fetchProductOptionValue();
  }

  render() {
    let {productsActions} = this.props
    let {productList, productPage} = this.props.productsState

    return (
      <Router>
        <main className="d-flex flex-column">
          <Header />
          <Container className="flex-grow-1">
            <Route exact path="/" render={()=>(
              <ProductList data={productList} productsActions={productsActions}/>)
            }/>
            <Route path="/:id-:name" render={({ match })=>(
              <Product match={match} data={productPage} productsActions={productsActions}/>
            )}/>
            <Route path="/cms/:id-:name" component={CmsPage}/>
            <Route path="/cms/:id-:name" component={CmsPage}/>
          </Container>
          <Footer />
        </main>
      </Router>
    );
  }
}

function mapStateToProps({productsReducer, imagesReducer}) {
  return {
    productsState: productsReducer,
    images       : imagesReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);

