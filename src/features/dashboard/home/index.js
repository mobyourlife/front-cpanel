import React from 'react'
import { Link } from 'react-router-dom'

import { Hero } from 'components/hero'
import { Page } from 'components/page'

const Home = () => (
  <div>
    <Hero title='Dashboard'/>
    <Page>
      <h2>Home</h2>
    </Page>
  </div>
)

export default Home
