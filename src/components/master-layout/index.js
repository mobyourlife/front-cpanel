import React from 'react'

import NavBar, { NavBarLink as Link } from 'components/navbar'

import './styles.scss'

const MasterLayoutComponent = ({ children }) => {
  return (
    <div>
      <NavBar>
        <Link label='Home' to='/'/>
        <Link label='Profile' to='/account/profile'/>
        <Link label='Logout' to='/account/logout'/>
      </NavBar>
      {children}
    </div>
  )
}

export default MasterLayoutComponent
