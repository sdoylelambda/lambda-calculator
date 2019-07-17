import React from "react";

const NumberButton = (props) => {

const { number } = props;
  return (
    <>
        <button>{number}</button>
    </>
  );
};

export default NumberButton;
