import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Images,ImagePlaceholder} from 'modules/combinations/components'

class ImageSlider extends Component {
  render () {
    let { data, product, fetching} = this.props.combinations

    return (
      <div className='product-page-slider'>
        {fetching ?
           <ImagePlaceholder /> :
           typeof data.associations.images === 'undefined' ?
             <Images data={product.data.associations.images} id={data.id_product} />
             :
             <Images data={data.associations.images} id={data.id_product} />}
      </div>
    )
  }
}

function mapStateToProps ({ combinations }) {
  return {
    combinations: combinations
  }
}

export default connect(mapStateToProps)(ImageSlider)
