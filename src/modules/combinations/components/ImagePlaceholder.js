import React from 'react'
import placeholder from 'img/product-placeholder.png'

const ImagePlaceholder = () => {
  return (
    <div>
      <div className='siema loading'>
        <img width='100%' src={placeholder} alt='Placeholder' />
      </div>
      <button className='prev' onClick={this.prev}>«</button>
        <button className='next' onClick={this.next}>»</button>
    </div>
  )
}

export default ImagePlaceholder
