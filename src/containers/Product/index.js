import React, {Component} from 'react';
import {
  Row, Col, Badge
} from 'reactstrap';

import renderHTML from 'react-render-html'
import ImageSlider from '../../components/ImageSlider'
import ProductsOnCategory from '../../components/ProductsOnCategory'
import ProductTabs from '../../components/ProductTabs'
import Combinations from '../../components/Combinations'
import ProductList from '../../components/ProductList'

export default class Product extends Component {
  componentDidMount() {
    let {productsActions} = this.props
    let {id} = this.props.match.params

    productsActions.fetchOne(id);
  }

  componentWillUnmount() {
    let {productsActions} = this.props

    productsActions.resetProductPageData()
  }

  componentDidUpdate() {
    let {fetching, data} = this.props.data
    let {productsActions} = this.props

    if (!fetching) {
      if (parseInt(this.props.match.params.id, 10) !== parseInt(data.id, 10)) {
        productsActions.fetchOne(this.props.match.params.id);
      }
    }
  }

  render() {
    let {fetching, data} = this.props.data

    return (
      <Row>
        {fetching ?
          <Col>
            <div>Loading...</div>
          </Col>
          :
          <Col>
            <Row>
              <Col xs="6">
                <ImageSlider productId={data.id} data={data.associations.images} altText={data.name}/>
              </Col>
              <Col xs="6">
                <h2>{data.name}</h2>
                <Badge color="success" className="mr-2 mb-3">{data.available_now}</Badge>
                {parseInt(data.show_condition, 10) ? <Badge color="info">{data.condition}</Badge> : null}
                <p>Price ${parseFloat(data.price).toFixed(2)}</p>
                {renderHTML(data.description_short)}
                <Combinations />
                <ProductTabs productDesc={data.description} id_manufacturer={data.id_manufacturer}/>
              </Col>
              <Col xs="12" className="mt-5">
                <ProductList limit={10} categoryID={data.id_category_default} manufacturerID={null}/>
                {/* <ProductsOnCategory /> */}
              </Col>
            </Row>
          </Col>}
      </Row>
    )
  }
}