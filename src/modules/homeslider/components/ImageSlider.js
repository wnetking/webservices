import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {request} from '../actions'
import Slides from './Slides'

class ImageSlider extends Component {
  componentDidMount() {
    let {request} = this.props
    let {data} = this.props.homeslider

    if (data === null) {
      request();
    }
  }

  render() {
    let {fetching, data} = this.props.homeslider
    let {active} = this.props.languages
    return (
      <div className="image-slider mb-5">
        {fetching ?
          <div>Loading ...</div>
          :
          <Slides data={data} active={active}/>
        }
      </div>
    )
  }
}

function mapStateToProps({homeslider,languages}) {
  return {
    homeslider: homeslider,
    languages: languages
  }
}
function mapDispatchToProps(dispatch) {
  return {
    request: bindActionCreators(request, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider);
