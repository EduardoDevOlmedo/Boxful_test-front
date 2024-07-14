import { Button as AntButton } from 'antd'
import React from 'react'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({children, className = '', iconBefore, iconAfter, disabled, type, loading, ...rest}) => {
  return (
    <AntButton
      disabled={disabled}
      danger={disabled}
      {...rest}
      className={`${className} form_button ${loading && 'loading_button'}`}
      loading={loading}
    >
      {!loading && iconBefore}
      {!loading && children}
      {!loading && iconAfter}
    </AntButton>
  )
}

export default Button
