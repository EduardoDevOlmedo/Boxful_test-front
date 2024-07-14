
import React, { useState, useEffect } from 'react';
import { PhoneInputProps } from './types';
import { Input } from 'antd';
import Label from '../Label/Label';

const countries = [
  { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
  { code: '+504', name: 'Honduras', flag: '🇭🇳' },
  { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
  { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷' }
];

const PhoneInput: React.FC<PhoneInputProps> = ({ label, value, onChange, className, ...rest }) => {
  const [flag, setFlag] = useState<string>('🇸🇻');

  useEffect(() => {
    const country = countries.find(country => value.startsWith(country.code));
    if (country) {
      setFlag(country.flag);
    } else {
      setFlag('🇸🇻'); 
    }
  }, [value]);

  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div className='datepicker_container'>
        <div className='datepicker_icon_container'>
          {flag}
        </div>
        <Input
          maxLength={14}
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          {...rest}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
