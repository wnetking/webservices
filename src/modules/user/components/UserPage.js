import React, {Component} from 'react';
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import {Redirect} from 'react-router-dom'
import {Button} from 'reactstrap';

// import {loginUser, logoutUser} from '../../actions/userActions'

class UserPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let {loginUser} = this.props
    let data = new FormData(document.querySelector('#login-form'));

    loginUser(data);
  }

  render() {
    let {login} = this.props.userState
    let {logoutUser} = this.props

    return (
      <div>
        {login.isLogin ? null : <Redirect to='/'/>}
        User Page
        <p>
          <Button onClick={logoutUser}>Log Out</Button>
        </p>
      </div>
    );
  }
}


function mapStateToProps({user}) {
  return {
    user: user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // loginUser : bindActionCreators(loginUser, dispatch),
    // logoutUser: bindActionCreators(logoutUser, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);