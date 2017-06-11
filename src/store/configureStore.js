import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import config from 'config'
import api from '../middleware/api'

import reducers from '../reducers'
import { loadState, saveState } from './localStorage'

const setupMiddlewares = () => {
  const middlewares = [
    thunk,
    api,
  ]

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }

  return applyMiddleware(...middlewares)
}

const configureStore = () => {
  const store = createStore(
    reducers,
    loadState(),
    setupMiddlewares()
  )
  store.subscribe(() => saveState(store.getState()))
  return store
}

export default configureStore
