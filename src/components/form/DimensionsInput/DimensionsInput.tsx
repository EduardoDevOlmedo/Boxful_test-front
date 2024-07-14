import React from 'react';
import Input from '../Input/Input';



const DimensionsInput: React.FC<DimensionsInputProps> = ({ length, height, width, onChange }) => {
  return (
    <>
        <Input
          label='Alto'
          suffix="cm"
          className="large"
          name="length"
          value={length}
          onChange={onChange}
        />
        <Input
          label='Alto'
          suffix="cm"
          className="height"
          name="height"
          value={height}
          onChange={onChange}
        />
        <Input
          label='Ancho'
          suffix="cm"
          className="broad"
          name="width"
          value={width}
          onChange={onChange}
        />
    </>
  );
};

export default DimensionsInput;
