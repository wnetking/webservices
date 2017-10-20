import React, { Component } from 'react'
import { Container } from 'reactstrap'

import { ProductList } from 'modules/productlist/components'
import { Manufacturers } from 'modules/manufacturers/components'

class Home extends Component {
  render () {
    return (
      <div className='flex-grow-1'>
        {/* <ImageSlider /> */}
        <Container className='flex-grow-1 mb-5'>
          <h2 className="text-center mb-4">Best Sellers</h2>
          {<ProductList
             limit={8}
             categoryID={null}
             manufacturerID={null}
             products={null} />}
        </Container>
        {/* <Stores /> */}
        <Container className='flex-grow-1'>
          {<h2 className="text-center mb-4">Brands</h2>}
          <Manufacturers limit={null} />
        </Container>
      </div>
    )
  }
}

export default Home
