import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import configureStore from './store/configureStore'
const store = configureStore()

import MasterLayout from 'components/master-layout'
import Account from 'features/account'
import Dashboard from 'features/dashboard'

const defaultRoute = Dashboard
const App = () => (
  <Provider store={store}>
    <Router>
      <Route render={() => (
        <MasterLayout>
          <Switch>
            <Route exact path='/' component={defaultRoute}/>
            <Route path='/account' component={Account}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
        </MasterLayout>
      )}/>
    </Router>
  </Provider>
)

export default App
