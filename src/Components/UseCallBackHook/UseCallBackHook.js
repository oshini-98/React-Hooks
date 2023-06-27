/*
  when a component re-renders, every function inside of the 
  component is recreated and therefore these functions’ 
  references change between renders.
*/


import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

const UseCallBackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default UseCallBackHook;