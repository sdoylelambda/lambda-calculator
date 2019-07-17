import React, {useState} from "react";
import OperatorButton from '../OperatorButtons/OperatorButton';
import { operators } from '../../../data';

const Operators = (props) => {
  
  const [operator, setOperator] = useState(operators)

  return (
    <div>
       {operator.map((operator, id) => (
         <OperatorButton key={id} operator={operator} display={props.display} setDisplay={props.setDisplay} />
       ))}
    </div>
  );
};

export default Operators;