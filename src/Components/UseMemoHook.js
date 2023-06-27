/*  
  The basic purpose of the useMemo hook is related to the fact 
  that we try to avoid the unnecessary re-rendering of 
  components and props in our program.

  We want to make sure that only the components that witness a 
  change in their values are re-rendered; otherwise, there’s no 
  need to re-render the component and slow down the performance.

  Only re-rendering certain components will make your program 
  efficient and improve the overall performance of your React 
  app.  
*/

// useCallBack vs useMemo

import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const UseMemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="App">
      <div> {getLongestName} </div>

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
}

export default UseMemoHook;