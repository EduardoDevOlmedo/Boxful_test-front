import React from 'react'
import { LabelProps } from './types';

const Label = ({children}: LabelProps) => {
  return (
    <label className='form_label'>{children}</label>
  )
}

export default Label;