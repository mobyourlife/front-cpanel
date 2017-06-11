import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from 'actions/auth'
import { Hero } from 'components/hero'
import { Page } from 'components/page'

import { Button, FormField } from './utils'
import './animations.scss'

export class LoginComponent extends Component {
  state = {
    username: null,
    password: null
  }

  doLogin = () => {
    const { login } = this.props
    const { username, password } = this.state
    login(username, password)
  }

  render() {
    const { errorMessage, isFetching, isAuthenticated } = this.props

    const classNames = ['box']

    if (!!errorMessage) {
      classNames.push('form--error')
    }

    if (isAuthenticated) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <Hero title='Login'/>
        <Page>
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter'>
              <div className={classNames.join(' ')}>
                <form>
                  <FormField label='Username' type='text' disabled={isFetching}
                    onChange={e => this.setState({ username: e.target.value })} />
                  <FormField label='Password' type='password' disabled={isFetching}
                    onChange={e => this.setState({ password: e.target.value })} />
                  {errorMessage}
                  <Button disabled={isFetching} onClick={this.doLogin}>
                    {isFetching ? 'Please wait...' : 'Login'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Page>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  errorMessage: state.auth.errorMessage,
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
  login
}

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)

export default LoginContainer
