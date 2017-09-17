import React, { Component } from 'react';
import { connect } from 'react-redux'
import renderHTML from 'react-render-html'

import {images} from '../../' 

class CategoryPage extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }
  getCurrentData = () => {
    let { data } = this.props.category

    if (data !== null) {
      return data.filter(item => {
        return parseInt(item.id, 10) === parseInt(this.props.match.params.id, 10)
      })
    } else {
      return null
    }
  }

  render() {
    let { fetching } = this.props.category

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            {renderHTML(this.getCurrentData()[0].description)}
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({ categoryReducer }) {
  return {
    category: categoryReducer
  }
}


export default connect(mapStateToProps)(CategoryPage);