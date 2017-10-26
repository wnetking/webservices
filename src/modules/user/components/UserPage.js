import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import { Button, Row, Col, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'

import { fetchLogout } from '../actions'

class UserPage extends Component {
  render () {
    let {data, isLogin, fetching} = this.props.user

    return (
      <div>
        {isLogin ? null : <Redirect to='/' />}
        <div>
          {fetching || data === null ? null :
             <Row>
               <Col sm='12'>
               {/* <h2 className='text-center mb-4'>You Account</h2> */}
               </Col>
               <Col sm='4'>
               <ListGroup>
                 <ListGroupItem>
                   Information
                 </ListGroupItem>
                 <ListGroupItem>
                   Add First Address
                 </ListGroupItem>
                 <ListGroupItem>
                   Order History and details
                 </ListGroupItem>
                 <ListGroupItem>
                   Credit slips
                 </ListGroupItem>
               </ListGroup>
               </Col>
               <Col sm='8'>
               <Jumbotron>
                 <h1 className='display-3'>{`Hello, ${data.firstname} ${data.lastname}!`}</h1>
                 <p className='lead'>
                   This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.
                 </p>
                 <hr className='my-2' />
                 <p>
                   It uses utility classes for typgraphy and spacing to space content out within the larger container.
                 </p>
                 <p className='lead'>
                   <Button onClick={this.props.fetchLogout.bind(null)}>
                     Log Out
                   </Button>
                 </p>
               </Jumbotron>
               </Col>
             </Row>}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({user}) {
  return {
    user: user
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchLogout: bindActionCreators(fetchLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
