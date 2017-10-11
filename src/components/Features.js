import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Table} from 'reactstrap';
import {getAll} from '../actions/featuresActions'

class Features extends Component {
  componentDidMount() {
    let {productPage, getAll} = this.props

    if (productPage.data !== null) {
      getAll(productPage.data.associations.product_features);
    }
  }

  render() {
    let {fetching, data} = this.props.features

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <Table striped className="mt-5">
            <tbody>
            {
              data.map((item, key)=>(
                <tr key={key}>
                  <td>{item.name[0].value}</td>
                  <td>{item.value[0].value}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        }
      </div>
    )
  }
}


function mapStateToProps({productsReducer, featuresReducer}) {
  return {
    productPage: productsReducer.productPage,
    features   : featuresReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAll, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Features);