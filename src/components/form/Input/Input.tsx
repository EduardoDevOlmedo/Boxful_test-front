import { Input as AntInput } from 'antd'
import { InputProps } from './types'
import React from 'react'
import Label from '../Label/Label'

const Input = ({label, className, ...rest}: InputProps) => {
  return (
    <div className={`input_container ${className}`}>
        {label && <Label>{label}</Label>}
        <AntInput {...rest}/>
    </div>
  )
}

export default Input