import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRoute = ({ children }) => {
    const { isLogged } = useAuth();

    if (isLogged()) return <Navigate to="/list" />
    
    return children;
};

export default PublicRoute;