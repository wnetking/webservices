import React, { Component } from 'react'
import Siema from 'siema';
import Api from 'api'

class Images extends Component {
  componentDidMount() {
    this.siema = new Siema({ perPage: 1 });
  }

  componentWillUnmount() {
    this.siema.destroy()
  }

  prev = () => {
    this.siema.prev()
  }

  next = () => {
    this.siema.next()
  }

  render() {
    return (
      <div>
        <div className='siema'>
          {
            this.props.data.map((item, key) => (
              <img key={key} width='100%' src={Api.images.productImage(this.props.id, item.id)} alt={''} />)
            )
          }
        </div>
        <button className='prev' onClick={this.prev}>«</button>
        <button className='next' onClick={this.next}>»</button>
      </div>
    )
  }
}

export default Images;