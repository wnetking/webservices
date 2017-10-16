import React, { Component } from 'react';
import Siema from 'siema';
import { images } from '../api/images/'

export default class ImageSlider extends Component {
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
    let { productId, data, altText } = this.props

    return (
      <div className="product-page-slider">
        <div className="siema">
          {typeof data === "undefined" ?
            null :
            data.map((item, key) => (
              <img key={key} width="100%" src={images.productImage(productId, item.id)} alt={altText} />
            ))
          }
        </div>
        <button className="prev" onClick={this.prev}>&laquo;</button>
        <button className="next" onClick={this.next}>&raquo;</button>
      </div>
    )
  }
}