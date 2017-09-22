import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import { Nav, NavItem} from 'reactstrap';
import {getAll} from '../../actions/categoryActions'


class CategoryNavTree extends Component {
  render() {
    let {fetching, data} = this.props.category

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <Nav className="ml-auto" navbar>
            {
              data.map((item, key) => (
                <NavItem key={key}>
                  <Link className="nav-link" to={`/category/${item.id}-${item.link_rewrite}`}>
                    {item.name}
                  </Link>
                </NavItem>
              ))
            }
          </Nav>
        }
      </div>
    )
  }
}

function mapStateToProps({categoryReducer}) {
  return {
    category: categoryReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAll, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNavTree);