import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, setColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
  };

  return (
    <div>
      <div
        className="p-0.5 translate-y-0.5 bg-gray-100 rounded inline-block cursor-pointer shadow-sm"
        onClick={handleClick}
      >
        <div
          className="px-7 py-5 rounded"
          style={{
            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          }}
        />
      </div>
      {displayColorPicker && (
        <div className="absolute z-10">
          <div
            className="fixed top-0 right-0 bottom-0 left-0"
            onClick={handleClose}
          />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
