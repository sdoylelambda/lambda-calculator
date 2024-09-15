import React from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

const Specials = (props) => {

  return (
    <div>
       {specials.map((special, id) => (
        <SpecialButton  key={id} special={special} display={props.display} setDisplay={props.setDisplay} />
       ))}
    </div>
  );
};

export default Specials;