import * as actions from './auth'

describe('auth actions', () => {
  it('login should create AUTH_LOGIN action', () => {
    expect(actions.login('admin', '123456')).toEqual({
      API: {
        type: 'AUTH_LOGIN',
        payload: {
          username: 'admin',
          password: '123456',
        },
      }
    })
  })

  it('logout should create AUTH_LOGOUT action', () => {
    expect(actions.logout()).toEqual({
      type: 'AUTH_LOGOUT'
    })
  })
})
