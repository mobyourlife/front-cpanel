import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const AuthoriseComponent = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to='/account/login'/>
  }

  return null
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export const AuthoriseContainer = connect(
  mapStateToProps
)(AuthoriseComponent)

export default AuthoriseContainer
