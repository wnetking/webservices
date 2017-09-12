import React, {Component} from 'react';
import Siema from 'siema';
import {images} from '../utils/images/'

export default class ImageSlider extends Component {
  componentDidMount() {
    this.siema = new Siema();
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
    let {productId, data, altText} = this.props

    return (
      <div>
        <div className="siema">
          {data.map((item, key) => (
            <img key={key} width="100%" src={images.productImage(productId, item.id)} alt={altText}/>
          ))}
        </div>
        <button onClick={this.prev}>Prev</button>
        <button onClick={this.next}>Next</button>
      </div>
    )
  }
}