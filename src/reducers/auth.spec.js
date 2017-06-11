import auth from './auth'

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(
      auth(undefined, {})
    ).toEqual({
      isFetching: false,
      errorMessage: null,
      isAuthenticated: false,
      username: null
    })
  })

  it('should handle AUTH_LOGIN status REQUEST', () => {
    expect(
      auth(undefined, {
        type: 'AUTH_LOGIN',
        status: 'REQUEST',
      })
    ).toEqual({
      isFetching: true,
      errorMessage: null,
      isAuthenticated: false,
      username: null
    })
  })

  it('should handle AUTH_LOGIN status SUCCESS', () => {
    expect(
      auth(undefined, {
        type: 'AUTH_LOGIN',
        status: 'SUCCESS',
        payload: {
          username: 'admin',
          password: '123456'
        },
      })
    ).toEqual({
      isFetching: false,
      errorMessage: null,
      isAuthenticated: true,
      username: 'admin'
    })
  })


  it('should handle AUTH_LOGIN status FAILURE', () => {
    expect(
      auth(undefined, {
        type: 'AUTH_LOGIN',
        status: 'FAILURE',
        message: 'Bad username or password!',
      })
    ).toEqual({
      isFetching: false,
      errorMessage: 'Bad username or password!',
      isAuthenticated: false,
      username: null
    })
  })

  it('should handle AUTH_LOGOUT', () => {
    expect(
      auth({
        isAuthenticated: true,
        username: 'admin'
      }, {
        type: 'AUTH_LOGOUT'
      })
    ).toEqual({
      isAuthenticated: false,
      username: null
    })
  })
})
