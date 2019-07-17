import React, { useState } from "react";
import NumberButton from "../NumberButtons/NumberButton";
import { numbers } from "../../../data";

const Numbers = () => {

  const [number, setNumber] = useState(numbers) 
  return (
    <div>
       {number.map((num, id) => (
         <NumberButton key={id} number={num} />
       ))}
    </div>
  );
};

export default Numbers;
