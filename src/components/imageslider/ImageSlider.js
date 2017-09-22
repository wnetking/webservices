import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAll} from '../../actions/imagesliderActions'
import Slides from './Slides'

class ImageSlider extends Component {
  componentDidMount() {
    let {getAll} = this.props
    let {data} = this.props.imageslider

    if (data === null) {
      getAll();
    }
  }

  render() {
    let {fetching, data} = this.props.imageslider
    return (
      <div className="image-slider mb-5">
        {fetching ?
          <div>Loading ...</div>
          :
          <Slides data={data}/>
        }
      </div>
    )
  }
}

function mapStateToProps({imagesliderReducer}) {
  return {
    imageslider: imagesliderReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAll, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider);
