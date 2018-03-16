import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Images, ImagePlaceholder } from 'modules/combinations/components';

class ImageSlider extends Component {
  render() {
    let { data, product, fetching } = this.props.combinations;

    return (
      <div className="product-page-slider">
        {fetching || !data ? (
          <ImagePlaceholder />
        ) : parseInt(product.data.is_virtual, 10) ||
        product.data.type === 'pack' ? (
          product.fetching ? (
            <ImagePlaceholder />
          ) : (
            <Images
              data={product.data.associations.images}
              id={product.data.id}
            />
          )
        ) : typeof data.associations.images === 'undefined' ? (
          <Images
            data={product.data.associations.images}
            id={product.data.id}
          />
        ) : (
          <Images data={data.associations.images} id={data.id_product} />
        )}
      </div>
    );
  }
}

let mapStateToProps = ({ combinations }) => ({
  combinations: combinations
});

export default connect(mapStateToProps)(ImageSlider);
