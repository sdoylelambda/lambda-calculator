import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

const Specials = () => {
  
  const [special, useSpecial] = useState(specials)

  return (
    <div>
       {special.map((special, id) => (
        <SpecialButton  key={id} special={special} />
       ))}
    </div>
  );
};

export default Specials;