import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import renderHTML from 'react-render-html'
import {Jumbotron} from 'reactstrap';

import * as productsActions from '../../actions/productsActions'

import {images} from '../../utils/images/'
import ProductList from '../ProductList'

class CategoryPage extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  getCurrentData = () => {
    let {data} = this.props.category

    if (data !== null) {
      return data.filter(item => {
        return parseInt(item.id, 10) === parseInt(this.props.match.params.id, 10)
      })
    } else {
      return null
    }
  }

  render() {
    let {fetching} = this.props.category

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <Jumbotron>
              <h1 className="display-3">{this.getCurrentData()[0].name}</h1>
              <div className="row">
                <img className="mr-2" src={images.categoryImage(this.getCurrentData()[0].id)} alt={this.getCurrentData()[0].name}/>
                <div>{renderHTML(this.getCurrentData()[0].description)}</div>
              </div>
            </Jumbotron>
            {/* <ProductList limit={100} categoryID={this.props.match.params.id} manufacturerID={null}/> */}
            <ProductList products={this.getCurrentData()[0].associations.products}/>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({productsReducer, categoryReducer}) {
  return {
    category     : categoryReducer,
    productsState: productsReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);