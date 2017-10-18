import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Badge } from 'reactstrap'

import renderHTML from 'react-render-html'
// import ImageSlider from '../../components/ImageSlider'
// import ProductsOnCategory from '../../components/ProductsOnCategory'
// import ProductTabs from '../../components/ProductTabs'
import { Combinations, ImageSlider } from 'modules/combinations/components'
// import AddToCart from '../../components/cart/AddToCart'

class Product extends Component {
  render () {
    let { fetching, product } = this.props.combinations

    return (
      <Row>
        <Col>
        <Row>
          <Col xs='12' sm='6'>
            <ImageSlider />
          </Col>
          <Col xs='12' sm='6'>
          <h2>{product.data === null ? 'Name' :
                 product.data.name[0].value}</h2>


          {product.data === null ? null :
            <div>
             <Badge color='success' className='mr-2 mb-3'>
               {product.data.available_now[0].value}
             </Badge>
             {parseInt(product.data.show_condition, 10) ? 
              <Badge color="info">{product.data.condition[0].value}</Badge> : null}
            </div>
          }
             
          
          {/* <p>Price&nbsp;&nbsp
                                                  {combinations.fetching ? null :
                                                    ((parseFloat(data.price) + parseFloat(combinations.data.price)) * parseFloat(general.currencies.data.conversion_rate)).toFixed(2)
                                                  }
                                                  &nbsp;{general.currencies.fetching ? null :
                                                    general.currencies.data.iso_code
                                                  }
                                                </p> */}
          {product.data === null ? 'Description' :
             renderHTML(product.data.description_short[0].value)}
          <Combinations id={this.props.match.params.id} />
          {/* <AddToCart product_id={data.id} /> */}
          {/* <ProductTabs productDesc={data.description[0].value} id_manufacturer={data.id_manufacturer} /> */}
          </Col>
          <Col xs='12' className='mt-5'>
          {/* <ProductsOnCategory /> */}
          </Col>
        </Row>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps ({ combinations }) {
  return {
    combinations: combinations
  }
}

export default connect(mapStateToProps)(Product)