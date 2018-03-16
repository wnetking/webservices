import React, { Component } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { fetchRequest } from '../actions';
import ProductMiniature from './ProductMiniature';
import Api from 'api';

class ProductList extends Component {
  componentDidMount() {
    let {
      fetchRequest,
      limit,
      categoryID,
      manufacturerID,
      products
    } = this.props;
    let { data, props } = this.props.productlist;

    if (
      data === null ||
      !Api.helper.isEqualObj(props, {
        limit: limit,
        category: categoryID,
        manufacturer: manufacturerID,
        productsArray: products
      })
    ) {
      fetchRequest(limit, categoryID, manufacturerID, products);
    }
  }

  render() {
    let { fetching, data, error } = this.props.productlist;
    let { lang } = this.props;
    return (
      <Row>
        {error.status ? (
          <Alert color="danger">{error.message}</Alert>
        ) : fetching || data === null ? (
          <Col>
            <Alert color="info">Loading...</Alert>
          </Col>
        ) : typeof data === 'undefined' ? (
          <Col>
            <Alert color="info">No products</Alert>
          </Col>
        ) : (
          data.map((item, key) => (
            <Col xs="12" sm="6" md="4" xl="3" key={key} className="mb-4">
              <ProductMiniature item={item} lang={lang} />
            </Col>
          ))
        )}
      </Row>
    );
  }
}

let mapStateToProps = ({ productlist, languages }) => ({
  productlist: productlist,
  lang: languages
});

let mapDispatchToProps = dispatch => ({
  fetchRequest: bindActionCreators(fetchRequest, dispatch)
});

ProductList.defaultProps = {
  limit: null,
  categoryID: null,
  manufacturerID: null,
  products: null
};

ProductList.propTypes = {
  limit: PropTypes.number,
  categoryID: PropTypes.number,
  manufacturerID: PropTypes.number,
  products: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
