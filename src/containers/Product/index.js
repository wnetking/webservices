import React, {Component} from 'react';
import {
  Row, Col, Badge
} from 'reactstrap';

import renderHTML from 'react-render-html'
import ImageSlider from '../../components/ImageSlider'

import {products} from '../../utils/products/'

export default class Product extends Component {
  componentDidMount() {
    let {productsActions} = this.props
    let {id} = this.props.match.params

    productsActions.fetchOne(id);
  }

  render() {
    let {fetching, data} = this.props.data

    return (
      <Row>
        {fetching || data === null ?
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
                <Badge color="success" className="mr-2">{data.available_now}</Badge>
                {parseInt(data.show_condition) ? <Badge color="info">{data.condition}</Badge> : null}
                <p>Price ${parseFloat(data.price).toFixed(2)}</p>
                {renderHTML(data.description)}
              </Col>
            </Row>
          </Col>}
      </Row>
    )
  }
}