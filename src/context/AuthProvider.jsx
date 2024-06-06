import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({});
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    
    return(
        <AuthContext.Provider value = {{auth,setAuth,setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;