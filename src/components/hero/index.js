import React from 'react'

export const Hero = ({ title, children }) => (
  <section className='hero is-primary'>
    <div className='hero-body'>
      <div className='container'>
        {title && <h1 className='title'>{title}</h1>}
        {children}
      </div>
    </div>
  </section>
)
