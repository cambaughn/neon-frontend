import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

import { login, logout, isLoggedIn } from '../../util/auth/AuthService';
import { removeUser } from '../../redux/actionCreators';

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <Navbar isLoggedIn={isLoggedIn} login={login} logout={logout} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    signedIn: !!state.user.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeUser: user => dispatch(removeUser()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
