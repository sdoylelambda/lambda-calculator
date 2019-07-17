import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state
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