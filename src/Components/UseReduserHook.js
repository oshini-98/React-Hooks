
/*  The useReducer Hook is used to store and update states, just like the useState Hook. 
It accepts a reducer function as its first parameter and the initial state as the second.

useReducer returns an array that holds the current state value and a dispatch function to 
which you can pass an action and later invoke it. While this is similar to the pattern Redux 
uses, there are a few differences.  */


import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT" :
            return { count: state.count + 1, showText: state.showText };
        case "toggleShowText":
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

const UseReducerHook = () =>{
    const [state, dispatch] = useReducer(reducer, {count:0, showText: true});

    return(
        <div>
            <h1>{state.count}</h1>
            <button 
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggleShowText" })
                }}
            >
                Click Here
            </button>
            {state.showText && <p>This is a text</p>}
        </div>
    );
};

export default UseReducerHook;