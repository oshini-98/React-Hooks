/*  React context is a feature of React that allows data to be accessed 
through multiple levels of child components. The Context API is similar 
to React props however unlike props, context needs to be configured 
only once instead of being passed every time a child component is used.  */


import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const CreateContextHook = () => {

    const [username, setUsername] = useState("");

    return(
        <AppContext.Provider value={{username, setUsername}}>
            <Login /> <User />
        </AppContext.Provider>
    );
}

export default CreateContextHook;