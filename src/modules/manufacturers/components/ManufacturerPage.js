import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import renderHTML from 'react-render-html';
import { Alert } from 'reactstrap';
import { fetchOneRequest } from '../actions';
import { ProductList } from 'modules/productlist/components';
import Api from 'api';
import Tools from 'utils';

class ManufacturerPage extends Component {
  componentWillMount() {
    this.props.fetchOneRequest(this.props.match.params.id);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    let { fetching, data } = this.props.manufacturers.manufacturerPage;
    let { lang } = this.props;

    return (
      <div>
        {fetching ? (
          <Alert color="info">Loading ...</Alert>
        ) : (
          <div>
            <h1>{data.name}</h1>
            <img
              src={Api.images.getManufacturersImg(data.id)}
              alt={data.name}
            />
            <div>{renderHTML(Tools.l(data.description, lang))}</div>
            <ProductList
              limit={null}
              categoryID={null}
              manufacturerID={data.id}
              products={null}
            />
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = ({ manufacturers, languages }) => ({
  manufacturers: manufacturers,
  lang: languages
});

let mapDispatchToProps = dispatch => ({
  fetchOneRequest: bindActionCreators(fetchOneRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturerPage);
