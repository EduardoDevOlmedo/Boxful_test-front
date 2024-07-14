import React from 'react'
import { Dropdown as AntDropdown } from 'antd';
import { DropdownProps } from './types'
import Label from '../Label/Label';
import Input from '../Input/Input';


const Dropdown = ({ items, value, label, placeholder }: DropdownProps) => {


  return (
   <div className='input_container'>
    {label && 
      <Label>{label}</Label>
    }
    <AntDropdown trigger={['click']} menu={{ items }} placement="bottomLeft" arrow>
      <Input placeholder={placeholder} style={{cursor: 'pointer'}} readOnly value={value} />
    </AntDropdown>
   </div> 
  )
}

export default Dropdown