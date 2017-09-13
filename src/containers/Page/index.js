import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from '../Header/'
import ProductList from '../../components/ProductList'
import Product from '../Product/'

import * as productsActions from '../../actions/productsActions'

class Page extends Component {
  render() {
    let {productsActions} = this.props
    let {productList, productPage} = this.props.productsState

    return (
      <Router>
        <main>
          <Header />
          <Container>
            <Route exact path="/" render={()=>(
              <ProductList data={productList} productsActions={productsActions}/>)
            }/>
            <Route path="/:id-:name" render={({ match })=>(
              <Product match={match} data={productPage} productsActions={productsActions}/>
            )}/>
          </Container>
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

