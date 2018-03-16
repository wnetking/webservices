import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroup } from 'reactstrap';
import { fetchBundleRequest } from '../actions';
import Api from 'api';
import Tools from 'utils'

class Bundle extends Component {
  componentDidMount() {
    let { fetchBundleRequest, products } = this.props;

    if (Array.isArray(products)) {
      fetchBundleRequest(products.map(item => item.id));
    }
  }

  render() {
    let { data, fetching } = this.props.product.bundle;
    let { products, lang } = this.props;

    return (
      <div>
        {fetching || !Array.isArray(products) ? null : (
          <div>
            <h5>Product in pack</h5>
            <ListGroup className="mb-2">
              {data.map((item, key) => (
                <ListGroupItem key={key}>
                  <img
                    style={{ maxWidth: 50, float: 'left' }}
                    className="mr-2"
                    src={Api.images.productImage(
                      item.id,
                      item.id_default_image
                    )}
                    alt={Tools.l(item.name, lang)}
                  />
                  <div style={{ float: 'left' }} className="mt-2">
                    <Link
                      to={`/product/${item.id}-${Tools.l(item.link_rewrite, lang)}`}
                    >
                      {Tools.l(item.name, lang)}
                    </Link>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = ({ product, languages }) => ({
  product: product,
  lang: languages
});

let mapDispatchToProps = dispatch => ({
  fetchBundleRequest: bindActionCreators(fetchBundleRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Bundle);
