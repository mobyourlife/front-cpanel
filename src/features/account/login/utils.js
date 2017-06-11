import React from 'react'

export const FormField = ({ label, type, ...rest }) => (
  <div className='field'>
    <label className='label'>{label}</label>
    <p className='control'>
      <input className='input' type={type} placeholder={label} {...rest} />
    </p>
  </div>
)

export const Button = ({ text, children, ...rest }) => (
  <div className='field'>
    <p className='control'>
      <button type='button' className='button is-primary' {...rest}>
        {text || children}
      </button>
    </p>
  </div>
)
