import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { getCmsList } from '../actions'

class CmsLinks extends Component {
  componentDidMount () {
    let {getCmsList} = this.props

    getCmsList()
  }

  render () {
    let {fetching, data} = this.props.cms.cmsList
    let { active } = this.props.languages

    return (
      <div>
        {fetching || data === null ? null :
           <div>
             <h5>Our Company</h5>
             {<ListGroup>
                {data.map((item, key) => (
                   <ListGroupItem key={key} style={{backgroundColor: 'transparent'}}>
                     <Link to={`/cms/${item.id}-${item.link_rewrite[0].value}`}>
                     {item.meta_title[active].value}
                     </Link>
                   </ListGroupItem>
                 ))}
              </ListGroup>}
           </div>}
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
    getCmsList: bindActionCreators(getCmsList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CmsLinks)
