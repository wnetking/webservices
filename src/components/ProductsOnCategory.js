import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Row, Col} from 'reactstrap';
import ProductMiniature from './ProductMiniature'

import {fetchOnCategory, resetFetchOnCategory} from '../actions/productsActions'

class ProductsOnCategory extends Component {
  componentDidMount() {
    let {fetchOnCategory, productPage} = this.props;

    fetchOnCategory(productPage.data.id_category_default);
  }

  componentWillUnmount() {
    let {resetFetchOnCategory} = this.props

    resetFetchOnCategory();
  }


  render() {
    let {fetching, data, name} = this.props.data

    return (
      <Row>
        {fetching ?
          <Col>
            <div>Loading...</div>
          </Col>
          :
          <Col>
            {data === null ?
              null
              :
              <div>
                <h5 className="mb-3">{data.length - 1} other products in category {name}</h5>
                <Row>
                  {data.map((item, key) => {
                    if (this.props.productPage.data !== null) {
                      if (parseInt(item.id, 10) !== this.props.productPage.data.id) {
                        return (
                          <Col xs="3" key={key} className="mb-4">
                            <ProductMiniature item={item}/>
                          </Col>
                        )
                      } else {
                        return null;
                      }
                    }
                  })}
                </Row>
              </div>
            }
          </Col>
        }
      </Row>
    )
  }
}

function mapStateToProps({productsReducer}) {
  return {
    data       : productsReducer.productsOnCategory,
    productPage: productsReducer.productPage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOnCategory     : bindActionCreators(fetchOnCategory, dispatch),
    resetFetchOnCategory: bindActionCreators(resetFetchOnCategory, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsOnCategory);