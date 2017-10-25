import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import renderHTML from 'react-render-html'

import { fetchOneRequest } from '../actions'

class CmsPage extends Component {
  componentDidMount () {
    let {fetchOneRequest} = this.props

    fetchOneRequest(this.props.match.params.id)
  }

  componentDidUpdate () {
    let {fetching, data} = this.props.cms
    let {fetchOneRequest} = this.props

    if (!fetching) {
      if (parseInt(this.props.match.params.id, 10) !== parseInt(data.id, 10)) {
        fetchOneRequest(this.props.match.params.id)
      }
    }
    window.scrollTo(0, 0)
  }

  render () {
    let {fetching, data} = this.props.cms
    let { active } = this.props.languages

    return (
      <div>
        {fetching ?
           <div>
             Loading ...
           </div>
           :
           <section>
             <h1>{data.meta_title[active].value}</h1>
             <arcticle>
               {renderHTML(data.content[active].value)}
             </arcticle>
           </section>}
      </div>
    )
  }
}

function mapStateToProps ({ cms, languages }) {
  return {
    cms: cms,
    languages: languages
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchOneRequest: bindActionCreators(fetchOneRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CmsPage)
