/*  useLayoutEffect hook is a React hook that can be passed through 
in a component's render method to cause the react library to 
consider the page’s layout and change its calculations for things 
like spacing and overflow.
It is called synchronously once React all DOM modifications  */


// UseLayoutEffectHook Vs UseEffect

/*  The main difference between the useEffect hook and the useLayoutEffect 
hook is that the useEffect hook serves asynchronously, whereas 
the useLayoutEffect hook works synchronously. In simple words, 
we can say that the difference between useEffect and useLayoutEffect 
is in the time at which these functions are invoked.  */



import { useLayoutEffect, useEffect, useRef } from "react";

const UseLayoutEffectHook = () => {

    const inputRef = useRef(null);

    //Execute before page rendering,  bafore use effect. 
    useLayoutEffect (() => {
        console.log(inputRef.current.value);
    }, []);

    //Execute after page rerendering.
    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, [])

    return(
        <div>
            <input ref={inputRef} value="PEDRO" style={{width: 400, height: 60}}/>
        </div>
    )
}

export default UseLayoutEffectHook;