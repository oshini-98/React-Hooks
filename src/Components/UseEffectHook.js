/*   useEffect Hook lets you perform side effects in functional components. 
It performs an action once the page loads for the first time. 
Example:- Fetching requests, manipulating DOM directly, using timer functions 
like setTimeout(), and more. The component rendering and side-effect logic 
are independent. So it would be a mistake to perform side-effects directly 
in the body of the component  */


import React, {useEffect, useState} from "react";
import axios from "axios";

const UseEffectHook = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").
        then((response) => {
            setData(response.data[0].email);
            console.log("API WAS CALLED");
        })
    }, []);

    return(
        <div>
            Hello World
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click
            </button>
        </div>
    )
}

export default UseEffectHook;