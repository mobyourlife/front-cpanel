import React from 'react'
import { Link } from 'react-router-dom'

import Authorise from 'components/authorise'
import { Hero } from 'components/hero'
import { Page } from 'components/page'

const Profile = () => (
  <div>
    <Authorise/>
    <Hero title='Profile'/>
    <Page>
      <h2>Profile</h2>
    </Page>
  </div>
)

export default Profile
