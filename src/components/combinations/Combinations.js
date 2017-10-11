import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {getCombinationData} from '../../actions/combinationsActions'
import {getOptionValues} from '../../actions/combinationsActions'
import {getAllCombinations} from '../../actions/combinationsActions'


class Combinations extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    let {productPage, getCombinationData, getOptionValues, getAllCombinations} = this.props

    if (productPage.data !== null) {
      getCombinationData(productPage.data.id_default_combination);
      getOptionValues(productPage.data.associations.product_option_values);
      getAllCombinations(productPage.data.associations.combinations);
    }
  }

  onClick = (id) => {
    let {getCombinationData} = this.props
    getCombinationData(id);
  }

  getCombination = (id) => {
    let {allCombinations} = this.props.combinations
    let returnData = [];

    if (!allCombinations.fetching) {
      allCombinations.data.forEach(item => {
        if (item.id === parseInt(id, 10)) {
          returnData = item.associations.product_option_values.slice();
        }
      })
    }

    return returnData;
  }

  getProductValue = (id) => {
    let {optionValues} = this.props.combinations
    let returnData = [];

    if (!optionValues.fetching) {
      optionValues.data.forEach(item => {
        if (item.id === parseInt(id, 10)) {
          returnData = item.name[0].value;
        }
      })
    }

    return returnData;
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let {fetching, data, allCombinations} = this.props.combinations
    let {productPage} = this.props

    return (
      <div>
        {fetching ?
          <p>Loading ...</p>
          :
          <div>
            <p>Quantity: {data.quantity}</p>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="mb-4">
              <DropdownToggle caret>
                {data.associations.product_option_values.map((item, key) => (
                  <span key={key}>
                    {this.getProductValue(item.id)}&nbsp;&nbsp;
                  </span>
                ))}
              </DropdownToggle>
              {
                allCombinations.fetching ?
                  null :
                  <DropdownMenu>
                    {productPage.data.associations.combinations.map((item, key) => (
                      <DropdownItem key={key} onClick={this.onClick.bind(null, item.id)}>
                        {this.getCombination(item.id).map((item, key) => (
                          <span key={key}>
                            {this.getProductValue(item.id)}&nbsp;&nbsp;
                           </span>
                        ))}
                      </DropdownItem >
                    ))}
                  </DropdownMenu>
              }
            </ButtonDropdown>
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
    getCombinationData: bindActionCreators(getCombinationData, dispatch),
    getOptionValues   : bindActionCreators(getOptionValues, dispatch),
    getAllCombinations: bindActionCreators(getAllCombinations, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Combinations);
