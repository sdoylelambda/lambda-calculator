import React from "react";

const OperatorButton = (props) => {

  const { operator } = props

  return (
    <>
      <button value={operator.value}>{operator.char}</button>
    </>
  );
};

export default OperatorButton;