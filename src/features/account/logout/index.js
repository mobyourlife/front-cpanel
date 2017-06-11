import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from 'actions/auth'

import Authorise from 'components/authorise'

export class LogoutComponent extends Component {
  componentDidMount() {
    const { logout } = this.props
    logout()
  }

  render() {
    return <Authorise/>
  }
}

const mapDispatchToProps = {
  logout
}

export const LogoutContainer = connect(
  null,
  mapDispatchToProps
)(LogoutComponent)

export default LogoutContainer
