import { AUTH_ACTIONS } from 'actions/auth'

const defaultState = {
  isFetching: false,
  errorMessage: null,
  isAuthenticated: false,
  username: null,
}

const login = (state, action) => {
  switch (action.status) {
    case 'REQUEST':
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      }

    case 'SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        username: action.payload.username,
      }

    case 'FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      }

    default:
      return state
  }
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return login(state, action)

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null
      }

    default:
      return state
  }
}

export default auth
