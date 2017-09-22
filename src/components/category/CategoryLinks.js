import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getAll } from '../../actions/categoryActions'


class CategoryLinks extends Component {
  componentDidMount() {
    let { getAll } = this.props

    getAll();
  }
  
  render() {
    let { fetching, data } = this.props.category

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <h5>Categories</h5>
            <ListGroup>
              {
                data.map((item, key) => (
                  <ListGroupItem key={key}>
                    <Link to={`/category/${item.id}-${item.link_rewrite}`}>
                      {item.name}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ categoryReducer }) {
  return {
    category: categoryReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAll, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLinks);