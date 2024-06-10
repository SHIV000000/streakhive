import React from 'react';
import { CirclePicker } from 'react-color';

const ColorPicker = ({ color, setColor }) => {
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      <CirclePicker
        color={color}
        onChangeComplete={handleChangeComplete}
        width="100%"
        circleSize={24}
        circleSpacing={12}
      />
    </div>
  );
};

export default ColorPicker;
