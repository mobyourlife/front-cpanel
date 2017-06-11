import React from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Login from './login'
import Logout from './logout'
import Profile from './profile'

const defaultRoute = ({ match }) => (
  <Redirect to={`${match.url}/login`}/>
)
const Account = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={defaultRoute}/>
      <Route path={`${match.url}/login`} component={Login}/>
      <Route path={`${match.url}/logout`} component={Logout}/>
      <Route path={`${match.url}/profile`} component={Profile}/>
  </Switch>
)

export default Account
