import React, {useState} from "react";
import OperatorButton from '../OperatorButtons/OperatorButton';
import { operators } from '../../../data';

const Operators = () => {
  
  const [operator, setOperator] = useState(operators)

  return (
    <div>
       {operator.map((operator, id) => (
         <OperatorButton key={id} operator={operator}  />
       ))}
    </div>
  );
};

export default Operators;