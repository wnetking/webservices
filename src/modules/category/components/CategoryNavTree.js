import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  NavDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import { getCategoryList } from '../actions';
import Tools from 'utils';

class CategoryNavTree extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  componentWillMount() {
    this.props.getCategoryList();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let { data, fetching } = this.props.category.categoryList;

    return (
      <div>
        {fetching || data === null ? (
          <div className="nav-item">
            <span className="nav-link">Category</span>
          </div>
        ) : (
          <NavDropdown
            className="left-auto mr-1"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle nav caret>
              Category
            </DropdownToggle>
            <DropdownMenu>
              {data.map((item, key) => (
                <DropdownItem key={key}>
                  <Link
                    className="nav-link"
                    to={`/category/${item.id}-${Tools.l(
                      item.link_rewrite,
                      this.props.lang
                    )}`}
                  >
                    {Tools.l(item.name, this.props.lang)}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </NavDropdown>
        )}
      </div>
    );
  }
}

function mapStateToProps({ category, languages }) {
  return {
    category: category,
    lang: languages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategoryList: bindActionCreators(getCategoryList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNavTree);
