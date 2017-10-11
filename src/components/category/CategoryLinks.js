import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { getCategoryList } from '../../actions/categoryActions'


class CategoryLinks extends Component {
  componentDidMount() {
    let { getCategoryList } = this.props
    let { data } = this.props.category

    if(data === null){
      getCategoryList();
    }
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
                    <Link to={`/category/${item.id}-${item.link_rewrite[0].value}`}>
                      {item.name[0].value}
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
    category: categoryReducer.categoryList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCategoryList: bindActionCreators(getCategoryList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLinks);