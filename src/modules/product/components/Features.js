import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'reactstrap';
import { fetchFeaturesRequest } from '../actions';
import Tools from 'utils';

class Features extends Component {
  componentDidMount() {
    let { combinations, fetchFeaturesRequest } = this.props;

    fetchFeaturesRequest(
      combinations.product.data.associations.product_features
    );
  }

  render() {
    let { fetching, data } = this.props.product.features;
    let { lang } = this.props;
    return (
      <div>
        {fetching && !data ? (
          <div>Loading ...</div>
        ) : (
          <Table striped className="mt-5">
            <tbody>
              {data.map((item, key) => (
                <tr key={key}>
                  <td>{Tools.l(item.name, lang)}</td>
                  <td>{Tools.l(item.value, lang)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

let mapStateToProps = ({ product, combinations, languages }) => ({
  product: product,
  combinations: combinations,
  lang: languages
});

let mapDispatchToProps = dispatch => ({
  fetchFeaturesRequest: bindActionCreators(fetchFeaturesRequest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Features);
