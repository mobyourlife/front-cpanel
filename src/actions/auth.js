export const AUTH_ACTIONS = {
  LOGIN: 'AUTH_LOGIN',
  LOGOUT: 'AUTH_LOGOUT',
}

export const login = (fbUserId, accessToken) => ({
  API: {
    type: AUTH_ACTIONS.LOGIN,
    verb: 'POST',
    endpoint: '/token',
    payload: {
      fbUserId,
      accessToken,
    },
  }
})

export const logout = () => ({
  type: AUTH_ACTIONS.LOGOUT
})
