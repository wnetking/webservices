import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

import {getAll} from '../actions/contactsActions'

class Contacts extends Component {
  componentDidMount() {
    let {getAll} = this.props

    getAll();
  }

  render() {
    let {fetching, data} = this.props.contacts

    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          <div>
            <h5>Contacts</h5>
            <ListGroup>
              {
                data.map((item, key) => (
                  <ListGroupItem key={key}>
                    <ListGroupItemHeading>{item.name[0].value}</ListGroupItemHeading>
                    <ListGroupItemText>
                      {item.description[0].value}
                    </ListGroupItemText>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
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


function mapStateToProps({contactsReducer}) {
  return {
    contacts: contactsReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getAll: bindActionCreators(getAll, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
