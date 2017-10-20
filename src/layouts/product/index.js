import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Row, Col} from 'reactstrap'
// import ProductsOnCategory from '../../components/ProductsOnCategory'
// import ProductTabs from '../../components/ProductTabs'
import { Combinations, ImageSlider } from 'modules/combinations/components'
import { Badges, Name, Description, ProductTabs, Price } from 'modules/product/components'
// import AddToCart from '../../components/cart/AddToCart'

class Product extends Component {
  render () {
    let { product } = this.props.combinations

    return (
      <Row>
        <Col>
        <Row>
          <Col xs='12' sm='6'>
            <ImageSlider />
          </Col>
          <Col xs='12' sm='6'>
            <Name data={product.data}/>
            <Badges data={product.data}/>
            <h2><Price /></h2>
            <Description data={product.data} type='short'/>
            <Combinations id={this.props.match.params.id} />
          {/* <AddToCart product_id={data.id} /> */}
            <ProductTabs />
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