/*  The useRef returns a mutable ref object. This object has a property called .current. 
The value is persisted in the refContainer.current property. These values are 
accessed from the current property of the returned object. The .current property 
could be initialised to the passed argument initialValue e.g. useRef(initialValue). 
The object can persist a value for a full lifetime of the component.  */


import React, {useRef} from "react";

const UseRefHook = () => {

    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.value = "";
    }

    return(
        <div>
            <h1>Pedro</h1>
            <input type="text" placeholder="Ex.." ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}

export default UseRefHook;