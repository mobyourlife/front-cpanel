import 'whatwg-fetch'

import config from 'config'

export const API_STATUS = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

const middleware = store => next => action => {
  const api = action.API
  if (typeof api === 'undefined') {
    return next(action)
  }

  next({
    type: api.type,
    status: API_STATUS.REQUEST
  })

  const url = `${config.api.url}${api.endpoint}`
  const options = {
    method: api.verb
  }
  if (api.payload) {
    options.body = JSON.stringify(api.payload)
  }

  return fetch(url, options)
    .then(async response => {
      const code = response.status
      const json = await response.json()
      if (code >= 400 || json.error) {
        return {
          code,
          error: json,
        }
      } else {
        return {
          code,
          data: json,
        }
      }
    })
    .then(response => {
      console.log(response)
      if (response.error) {
        const message = response.error.message || 'Something bad happened!'
        throw new Error(message)
      } else {
        return response
      }
    })
    .then(payload => {
      next({
        type: api.type,
        status: API_STATUS.SUCCESS,
        payload
      })
    })
    .catch(error => {
      next({
        type: api.type,
        status: API_STATUS.FAILURE,
        message: error.message || 'Something went wrong!',
        error
      })
    })
}

export default middleware
