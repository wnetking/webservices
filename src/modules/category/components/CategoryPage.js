import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import renderHTML from 'react-render-html'
import { Alert, Row, Col } from 'reactstrap'
import { fetchOneRequest } from '../actions'

import { ProductList } from 'modules/productlist/components'
import { SubCat } from 'modules/category/components'
import Api from 'api'

class CategoryPage extends Component {
  componentWillMount() {
    this.props.fetchOneRequest(this.props.match.params.id)
  }

  componentDidUpdate() {
    let { fetching, data } = this.props.category
    let { fetchOneRequest } = this.props

    if (!fetching) {
      if (parseInt(this.props.match.params.id, 10) !== parseInt(data.id, 10)) {
        fetchOneRequest(this.props.match.params.id);
      }
    }
    window.scrollTo(0, 0)
  }

  render() {
    let { fetching, data } = this.props.category
    let { active } = this.props.languages

    return (
      <div>
        {
          fetching ?
            <Alert color="info">
              Loading ...
           </Alert>
            :
            <div>
              <Row>
                <Col xs={12} md={3}>
                  <img src={Api.images.getCategoryImage(data.id)} alt={data.name[active].value} />
                </Col>
                <Col xs={12} md={9}>
                  <h1>{data.name[active].value}</h1>
                  <div>
                    {renderHTML(data.description[active].value)}
                  </div>
                </Col>
              </Row>
              {
                Array.isArray(data.associations.categories) ?
                  <SubCat /> : null
              }
              <h3>Products</h3>
              <ProductList limit={null} categoryID={null} manufacturerID={null} products={data.associations.products.map((item) => item.id)} />
            </div>}
      </div>
    )
  }
}

function mapStateToProps({ category, languages }) {
  return {
    category: category,
    languages: languages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOneRequest: bindActionCreators(fetchOneRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
