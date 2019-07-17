import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

const Specials = (props) => {
  
  const [special, useSpecial] = useState(specials)

  return (
    <div>
       {special.map((special, id) => (
        <SpecialButton  key={id} special={special} display={props.display} setDisplay={props.setDisplay} />
       ))}
    </div>
  );
};

export default Specials;