import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';


class CategoryNavTree extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let {fetching, data} = this.props.category

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <NavDropdown className="left-auto mr-1" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Category
            </DropdownToggle>
            <DropdownMenu>
              {
                data.map((item, key) => (
                  <DropdownItem key={key}>
                    <Link className="nav-link" to={`/category/${item.id}-${item.link_rewrite}`}>
                      {item.name}
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

function mapStateToProps({categoryReducer}) {
  return {
    category: categoryReducer.categoryList,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNavTree);