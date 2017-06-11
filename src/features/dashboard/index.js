import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import Authorise from 'components/authorise'

import Home from './home'

const defaultRoute = Home
const Dashboard = ({ match }) => (
  <div>
    <Authorise/>
    <Switch>
      <Route exact path={match.url} component={defaultRoute}/>
      <Route path={`${match.url}/home`} component={Home}/>
    </Switch>
  </div>
)

export default Dashboard
