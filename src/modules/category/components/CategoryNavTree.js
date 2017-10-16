import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { NavDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

import { getCategoryList } from '../actions'


class CategoryNavTree extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentWillMount() {
    let { getCategoryList } = this.props
    getCategoryList()
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let { data, fetching } = this.props.category.categoryList

    return (
      <div>
        {fetching || data === null ?
          <div className='nav-item'>
            <span className='nav-link'>Categorys</span>
          </div>
          :
          <NavDropdown className="left-auto mr-1" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Category
            </DropdownToggle>
            <DropdownMenu>
              {
                data.map((item, key) => (
                  <DropdownItem key={key}>
                    <Link className="nav-link" to={`/category/${item.id}-${item.link_rewrite[0].value}`}>
                      {item.name[0].value}
                    </Link>
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

function mapStateToProps({ category }) {
  return {
    category: category,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategoryList: bindActionCreators(getCategoryList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNavTree); 