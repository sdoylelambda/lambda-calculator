import React from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Display from './components/DisplayComponents/Display';
import Operator from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Logo from "./components/DisplayComponents/Logo";

function App() {

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display />
        <Operator />
        <Numbers />
        <Specials />
      </div>
    </div>
  );
}

export default App;
