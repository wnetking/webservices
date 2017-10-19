import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Images, ImagePlaceholder } from 'modules/combinations/components'

class ImageSlider extends Component {
  render () {
    let { data, product, fetching} = this.props.combinations

    return (
      <div className='product-page-slider'>
        {fetching ?
           <ImagePlaceholder /> :
           parseInt(product.data.is_virtual) || product.data.type === 'pack'  ?
           product.fetching ? <ImagePlaceholder />:
           <Images data={product.data.associations.images} id={product.data.id} /> :
         
             typeof data.associations.images === 'undefined' ?
               <Images data={product.data.associations.images} id={product.data.id} />
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
