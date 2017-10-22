import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ButtonDropdown, Alert } from 'reactstrap';
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

  componentDidUpdate() {
    let {fetching} = this.props.combinations
    let {id, fetchProductRequest} = this.props
    let {data} =this.props.combinations.product

    if (!fetching) {
      if (parseInt(id, 10) !== parseInt(data.id, 10)) {
        fetchProductRequest(id);
        window.scrollTo(0, 0)
      }
    }
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
    let {active} = this.props.languages 
    return (
      <div>
        {error.status ?
          <Alert color='danger'>
          {error.message}
        </Alert>:
        fetching  ?
          <Placeholder isOpen={this.state.dropdownOpen} toggle={this.toggle} />
          :
          parseInt(product.data.is_virtual, 10) || product.data.type === 'pack'  ? null:
          <div>
            <p>Quantity: { parseInt(product.data.is_virtual, 10) ? 
            product.data.quantity : data.quantity}</p>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
              <Toggle data={data} options={options} active={active} />
              {
                all.fetching ? null :
                  <Dropdown active={active} product={product} options={options} all={all} onClick={this.onClick} />
              }
            </ButtonDropdown>
          </div>
        }
      </div>
    )
  }
}


function mapStateToProps({ combinations, languages }) {
  return {
    combinations: combinations, 
    languages: languages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCombinationRequest: bindActionCreators(fetchCombinationRequest, dispatch),
    fetchProductRequest: bindActionCreators(fetchProductRequest, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Combinations);
