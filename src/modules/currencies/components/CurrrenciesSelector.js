import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ButtonDropdown, DropdownToggle } from 'reactstrap';

class CurrrenciesSelector extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentDidMount() {
    let { id, fetchProductRequest } = this.props

    // fetchProductRequest(id)
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
}