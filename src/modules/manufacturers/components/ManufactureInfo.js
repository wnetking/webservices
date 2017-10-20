import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {fetchInfoRequest} from '../actions'
import Api from 'api'

class ManufactureInfo extends Component {
  componentDidMount() {
    let {combinations, fetchInfoRequest} = this.props

    if (combinations.product.data !== null) {
      fetchInfoRequest(combinations.product.data.id_manufacturer);
    }
  }

  render() {
    let {fetching, data} = this.props.manufacturers.info

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <p>{data.name}</p>
            <img src={Api.images.getManufacturersImg(data.id)} alt="Manufacturer"/>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ manufacturers , combinations}) {
  return {
    manufacturers: manufacturers,
    combinations: combinations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInfoRequest: bindActionCreators(fetchInfoRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManufactureInfo);