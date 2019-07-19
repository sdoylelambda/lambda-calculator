import React, { useState } from "react";

import "./App.scss";

import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Display from './components/DisplayComponents/Display';
import Operator from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [display, setDisplay] = useState(0)

  return (
    <div className="container">
      <div className='top'>
        <Logo />
        <Display display={display} />
      </div>
      <div className="App">
        <Numbers display={display} setDisplay={setDisplay}/>
        <Operator display={display} setDisplay={setDisplay}/>
        <Specials display={display} setDisplay={setDisplay}/>
      </div>
    </div>
  );
}

export default App;
