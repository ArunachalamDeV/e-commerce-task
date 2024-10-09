
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import product from "../../../utils/product";
function valuetext(value) {
  return `$${value}`;
}

export default function PriceRangeSlider({
  highPrice,
  setIsChanged,
}) {


  const [value, setValue] = useState([0, highPrice.max]);
  const handleChange = (event, newValue) => {

     
  
    setIsChanged((preValue) => {
      const getValue = [
        ...product.filter((value) => {
          if (
            value.sellingPrice > newValue[0] &&
            value.sellingPrice < newValue[1]
          )
            return value;
          return;
        }),
      ];
     if(getValue.length < 0)
      return product;
    return getValue
    });
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        min={0}
        max={highPrice.max}
        step={10}
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div>
        <p>Selected range:</p>
        <div>
          ₹{value[0]} - ₹{value[1]}
        </div>
      </div>
    </Box>
  );
}
