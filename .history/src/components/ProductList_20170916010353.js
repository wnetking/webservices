import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productsActions from '../actions/productsActions'

import ProductMiniature from './ProductMiniature'

class ProductList extends Component {
  componentDidMount() {
    let { productsActions } = this.props
    let { fetching } = this.props.productsState.productList

    if (!fetching && typeof this.props.products !== 'undefined') {
      productsActions.fetchAll();
    } else {
      let { fetching, data } = this.props.category

      if (!fetching) {
        productsActions.fetchSelected(this.props.products);
      }
    }
  }
  componentDidUpdate() {
    let { fetching } = this.props.productsState.productList

    if (!fetching && typeof this.props.products !== 'undefined') {

        productsActions.fetchSelected(this.props.products);
      }
    }
  }

  render() {
    let { fetching, data } = this.props.productsState.productList

    return (

      <Row>
        {fetching || data === null ?
          <Col>
            <div>Loading...</div>
          </Col>
          :
          data.map((item, key) => (
            <Col xs="3" key={key} className="mb-4">
              <ProductMiniature item={item} />
            </Col>
          ))
        }
      </Row>
    )
  }
}


function mapStateToProps({ productsReducer, categoryReducer }) {
  return {
    productsState: productsReducer,
    category: categoryReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);