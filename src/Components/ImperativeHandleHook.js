/*  useImperativeHandle customizes the instance value that is exposed to parent components 
when using ref. As always, imperative code using refs should be avoided in most cases. 
useImperativeHandle should be used with forwardRef  */


import React, { useRef } from "react";
import Button from "../Elements/Button";

// useImpative Hook - I f pass a refference, it can call from the parent component
const ImparativeHandleHook = () => {
    const buttonRef = useRef(null)
    return(
        <div>
            <button
                onClick={() => {
                    buttonRef.current.alterToggle();
                }}
            >
                Button From Parent
            </button>
            <Button ref={buttonRef}/>
        </div>
    );
}

export default ImparativeHandleHook;