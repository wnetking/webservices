import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { Combinations, ImageSlider } from 'modules/combinations/components';
import {
  Badges,
  Name,
  Description,
  ProductTabs,
  Price,
  Bundle,
  Reference,
  Accessories
} from 'modules/product/components';

class Product extends Component {
  render() {
    let { product } = this.props.combinations;
    let { lang } = this.props;

    return (
      <Row>
        <Col>
          <Row>
            <Col xs="12" sm="6">
              <ImageSlider />
            </Col>
            <Col xs="12" sm="6">
              <Reference data={product.data} />
              <Name data={product.data} lang={lang} />
              <Badges data={product.data} lang={lang} />
              <h2>
                <Price />
              </h2>
              <Description data={product.data} type="short" lang={lang} />
              <Combinations id={this.props.match.params.id} />

              {product.data === null ? null : (
                <Bundle products={product.data.associations.product_bundle} />
              )}
              <ProductTabs />
            </Col>
            <Col xs="12" className="mt-5">
              {product.data === null ? null : (
                <Accessories products={product.data.associations.accessories} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

let mapStateToProps = ({ combinations, languages }) => ({
  combinations: combinations,
  lang: languages
});

export default connect(mapStateToProps)(Product);
