import React, { useState } from "react";
import NumberButton from "../NumberButtons/NumberButton";
import { numbers } from "../../../data";

const Numbers = (props) => {

  const [number, setNumber] = useState(numbers) 
  return (
    <div>
       {number.map((num, id) => (
         <NumberButton key={id} number={num} display={props.display} setDisplay={props.setDisplay} />
       ))}
    </div>
  );
};

export default Numbers;
