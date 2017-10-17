import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import renderHTML from 'react-render-html'
import { Alert } from 'reactstrap'
import { fetchOneRequest } from '../actions'

import {ProductList} from 'modules/productlist/components'
import Api from 'api'

class ManufacturerPage extends Component {
  componentWillMount () {
    this.props.fetchOneRequest(this.props.match.params.id)
  }

  componentDidUpdate () {
    window.scrollTo(0, 0)
  }

  render () {
    let {fetching, data, error} = this.props.manufacturers.manufacturerPage

    return (
      <div>
        {
          fetching ?
           <Alert color="info">
             Loading ...
           </Alert>
           :
           <div>
             <h1>{data.name}</h1>
             <img src={Api.images.getManufacturersImg(data.id)} alt={data.name} />
             <div>
               {renderHTML(data.description[0].value)}
             </div>
             <ProductList limit={null} categoryID={null} manufacturerID={data.id} products={null}/>
           </div>}
      </div>
    )
  }
}

function mapStateToProps ({manufacturers}) {
  return {
    manufacturers: manufacturers
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchOneRequest: bindActionCreators(fetchOneRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerPage)
