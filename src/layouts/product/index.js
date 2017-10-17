import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Row, Col, Badge} from 'reactstrap';

import renderHTML from 'react-render-html'
// import ImageSlider from '../../components/ImageSlider'
// import ProductsOnCategory from '../../components/ProductsOnCategory'
// import ProductTabs from '../../components/ProductTabs'
import {Combinations} from 'modules/combinations/components'
// import AddToCart from '../../components/cart/AddToCart'

// import * as productsActions from '../../actions/productsActions'

class Product extends Component {
  // componentDidMount() {
  //   let { productsActions } = this.props
  //   let { id } = this.props.match.params

  //   productsActions.fetchOne(id);
  // }

  // componentWillUnmount() {
  //   let { productsActions } = this.props

  //   productsActions.resetProductPageData()
  // }

  // componentDidUpdate() {
  //   let { fetching, data } = this.props.data
  //   let { productsActions } = this.props

  //   if (!fetching) {
  //     if (parseInt(this.props.match.params.id, 10) !== parseInt(data.id, 10)) {
  //       productsActions.fetchOne(this.props.match.params.id);
  //     }
  //   }
  // }

  render() {
    // let { fetching, data } = this.props.data
    // let { combinations, general } = this.props

    return (
      <Row>
          <Col>
            <Row>
              <Col xs="12" sm="6">
                Product
                {/* {
                  combinations.fetching ?
                    null :
                    typeof combinations.data.associations.images === "undefined" ?
                      <ImageSlider productId={data.id} data={data.associations.images} altText={data.name[0].value} />
                      :
                      <ImageSlider productId={data.id} data={combinations.data.associations.images} altText={data.name[0].value} />
                } */}
              </Col>
              <Col xs="12" sm="6">
                {/* <h2>{data.name[0].value}</h2> */}
                {/* <Badge color="success" className="mr-2 mb-3">{data.available_now[0].value}</Badge> */}
                {/* {parseInt(data.show_condition, 10) ? <Badge color="info">{data.condition[0].value}</Badge> : null} */}
                {/* <p>Price&nbsp;&nbsp;
                  {combinations.fetching ? null :
                    ((parseFloat(data.price) + parseFloat(combinations.data.price)) * parseFloat(general.currencies.data.conversion_rate)).toFixed(2)
                  }
                  &nbsp;{general.currencies.fetching ? null :
                    general.currencies.data.iso_code
                  }
                </p> */}
                {/*renderHTML(data.description_short[0].value)*/}
                <Combinations id={this.props.match.params.id}/>
                {/* <AddToCart product_id={data.id} /> */}
                {/* <ProductTabs productDesc={data.description[0].value} id_manufacturer={data.id_manufacturer} /> */}
              </Col>
              <Col xs="12" className="mt-5">
                {/* <ProductsOnCategory /> */}
              </Col>
            </Row>
          </Col>
      </Row>
    )
  }
}


function mapStateToProps({ productsReducer, combinationsReducer, generalReducer }) {
  return {
    // data        : productsReducer,
    // combinations: combinationsReducer,
    // general     : generalReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);