import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import renderHTML from 'react-render-html'
import {Jumbotron} from 'reactstrap';
import ProductList from '../ProductList'
import {getCategoryData} from '../../actions/categoryActions'
import {images} from '../../api/images/'

class CategoryPage extends Component {
  componentDidMount() {
    let {getCategoryData} = this.props

    getCategoryData(this.props.match.params.id);
  }
  componentDidUpdate() {
    let {fetching, data} = this.props.category
    let {getCategoryData} = this.props

    if (!fetching) {
      if (parseInt(this.props.match.params.id, 10) !== parseInt(data.id, 10)) {
        getCategoryData(this.props.match.params.id);
      }
    }
    window.scrollTo(0, 0)
  }

  render() {
    let {fetching,data} = this.props.category

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <Jumbotron>
              <h1 className="display-3">{data.name}</h1>
              <div className="row">
                <img className="mr-2" src={images.categoryImage(data.id)} alt={data.name}/>
                <div>{renderHTML(data.description)}</div>
              </div>
            </Jumbotron>

            <ProductList limit={null} categoryID={null} manufacturerID={null}
              products={data.associations.products.map((item) => item.id)}/>
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
    getCategoryData: bindActionCreators(getCategoryData, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);