import { createContext } from "react";
import { useState } from "react";
import roles from "../helpers/roles";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (userCredentials, fromLocation) => {

        setUser({ id: 1, name: 'Martin', email: 'martindelaC@gmail.com', role: roles.admin});

        console.log(userCredentials);

        if(fromLocation) {
            navigate(fromLocation, {replace:true});
        }
        return user;
    };
    
    const logout = () => setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )

}

