import React, {Component} from 'react';
import {Label, Input} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAll} from '../actions/combinationsActions'


class Combinations extends Component {
  componentDidMount() {
    let {productPage, getAll} = this.props

    if (productPage.data !== null) {
      getAll(productPage.data.associations.combinations);
    }
  }

  getQuantity = () => {
    let {data} = this.props.combinations
    let returnData = 0;

    if (data !== null) {
      data.forEach(item => {
        returnData += parseInt(item.quantity, 10);
      })
    }


    return returnData
  }

  render() {
    let {fetching, data} = this.props.combinations
    return (
      <div>
        {fetching ?
          <p>Loading ...</p>
          :
          <div>
            <p>Quantity: {this.getQuantity()}</p>
          </div>
        }
      </div>
    )
  }
}


function mapStateToProps({productsReducer, combinationsReducer}) {
  return {
    productPage : productsReducer.productPage,
    combinations: combinationsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAll, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Combinations);
