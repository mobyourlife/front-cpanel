import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './animation.scss'

export const NavBarComponent = ({ isAuthenticated, children }) => {
  const classNames = [
    'container',
    'navbar--animated',
    isAuthenticated && 'navbar--visible'
  ]
  .filter(i => !!i)
  .join(' ')

  return (
    <div className={classNames}>
      <nav className='nav'>
        <div className='nav-left'>
          <a className='nav-item'>
            Mob Your Life
          </a>
        </div>

        <div className='nav-right nav-menu'>
          {children}
        </div>
      </nav>
    </div>
  )
}

export const NavBarLink = ({label, to, onClick}) => (
  <Link className='nav-item' to={to} onClick={onClick}>{label}</Link>
)

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export const NavBarContainer = connect(
  mapStateToProps
)(NavBarComponent)

export default NavBarContainer
