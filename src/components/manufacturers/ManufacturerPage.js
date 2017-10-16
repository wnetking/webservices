import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import renderHTML from 'react-render-html'
import {getOne} from '../../actions/manufacturersActions'
import {images} from '../../api/images/'
import ProductList from '../ProductList'

class ManufacturerPage extends Component {
  componentDidMount() {
    this.props.getOne(this.props.match.params.id);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    let {fetching, data} = this.props.manufacturerPage

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <h1>{data.name}</h1>
            <img src={images.getManufacturersImg(data.id)} alt={data.name}/>
            <div>{renderHTML(data.description)}</div>
            <ProductList limit={null} categoryID={null} manufacturerID={data.id} />
          </div>
        }
      </div>
    )
  }
}


function mapStateToProps({manufacturersReducer}) {
  return {
    manufacturerPage: manufacturersReducer.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getOne: bindActionCreators(getOne, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerPage);