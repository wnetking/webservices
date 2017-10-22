import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import renderHTML from 'react-render-html'

import {getCmsData} from '../../actions/cmsActions'

class CmsPage extends Component {
  componentDidMount() {
    let {getCmsData} = this.props

    getCmsData(this.props.match.params.id);
  }

  componentDidUpdate() {
    let {fetching, data} = this.props.cms
    let {getCmsData} = this.props

    if (!fetching) {
      if (parseInt(this.props.match.params.id, 10) !== parseInt(data.id, 10)) {
        getCmsData(this.props.match.params.id);
      }
    }

    window.scrollTo(0, 0)
  }

  render() {
    let {fetching, data} = this.props.cms

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <section>
            <h1>{data.meta_title}</h1>
            <arcticle>
              {renderHTML(data.content)}
            </arcticle>
          </section>
        }
      </div>
    )
  }
}

function mapStateToProps({cmsReducer}) {
  return {
    cms: cmsReducer,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getCmsData: bindActionCreators(getCmsData, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CmsPage);