import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import {fetchRequest,setActive} from '../actions'

class CurrrenciesSelector extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    let { fetchRequest } = this.props

    fetchRequest()
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

  render(){
    let { data, fetching, active } = this.props.currencies

    return(
      <div>
         {fetching ?
          <div className='nav-item'>
            <span className='nav-link'>currencies</span>
          </div>
          :
          <NavDropdown className="left-auto mr-1" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              {data[active].iso_code}
            </DropdownToggle>
            <DropdownMenu>
              {
                data.map((item, key) => (
                  <DropdownItem key={key} onClick={this.props.setActive.bind(null, key)}>
                      {item.iso_code}
                  </DropdownItem>
                ))
              }
            </DropdownMenu>
          </NavDropdown>
         }
      </div>
    )
  }
}


function mapStateToProps ({currencies}) {
  return {
    currencies: currencies
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchRequest: bindActionCreators(fetchRequest, dispatch),
    setActive: bindActionCreators(setActive, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrrenciesSelector)
