import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ButtonDropdown, DropdownToggle, Alert } from 'reactstrap';
import { Dropdown, Placeholder, Toggle } from 'modules/combinations/components'
import { fetchProductRequest, fetchCombinationRequest } from '../actions'

class Combinations extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    let { id, fetchProductRequest } = this.props

    fetchProductRequest(id)
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onClick = (id) => {
    let { fetchCombinationRequest } = this.props
    fetchCombinationRequest(id);
  }

  render() {
    let { fetching, data, all, product, options, error } = this.props.combinations

    return (
      <div>
        {error.status ?
          <Alert color='danger'>
          {error.message}
        </Alert>:
        fetching  ?
          <Placeholder isOpen={this.state.dropdownOpen} toggle={this.toggle} />
          :
          parseInt(product.data.is_virtual) || product.data.type === 'pack'  ? null:
          <div>
            <p>Quantity: { parseInt(product.data.is_virtual) ? 
            product.data.quantity : data.quantity}</p>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
              <Toggle data={data} options={options} />
              {
                all.fetching ? null :
                  <Dropdown product={product} options={options} all={all} onClick={this.onClick} />
              }
            </ButtonDropdown>
          </div>
        }
      </div>
    )
  }
}


function mapStateToProps({ combinations }) {
  return {
    combinations: combinations
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCombinationRequest: bindActionCreators(fetchCombinationRequest, dispatch),
    fetchProductRequest: bindActionCreators(fetchProductRequest, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Combinations);
