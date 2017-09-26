import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as productsActions from '../actions/productsActions'
import ProductMiniature from './ProductMiniature'

class ProductList extends Component {
  componentDidMount() {
    let {productsActions, limit, categoryID, manufacturerID} = this.props

    productsActions.getFilterProductsList(limit,categoryID,manufacturerID);
  }

  componentWillReceiveProps(nextProps) {
    let {productsActions} = this.props

    if (typeof nextProps.products !== 'undefined'
      && typeof this.props.products !== 'undefined') {
      if (!this.equel(nextProps.products, this.props.products)) {
        productsActions.fetchSelected(nextProps.products);
      }
    }
  }

  equel = (arr, arr2) => {
    if (arr.length !== arr2.length) return false
    var on = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
          on++
          break
        }
      }
    }
    return on === arr.length ? true : false
  }


  render() {
    let {fetching, data} = this.props.productsState.productList

    return (
      <Row>
        {fetching || data === null ?
          <Col>
            <div>Loading...</div>
          </Col>
          :
          data.map((item, key) => (
            <Col xs="4" key={key} className="mb-4">
              <ProductMiniature item={item}/>
            </Col>
          ))
        }
      </Row>
    )
  }
}


function mapStateToProps({productsReducer, categoryReducer}) {
  return {
    productsState: productsReducer,
    category     : categoryReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);