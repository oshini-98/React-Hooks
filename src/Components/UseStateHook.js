/*
  useState is React Hook that allows you to add state to a functional component.
  It returns an array with two values: the current state and a function to update it.
  The Hook takes an initial state value as an argument and returns an updated state 
  value whenever the setter function is called
*/

import React, { useState } from "react";

const UseStateHook = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default UseStateHook;