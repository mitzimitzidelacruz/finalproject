import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PrivateRoute = ({ children, hasRole: role }) => {
    const location = useLocation();
    
    const log = "/login";

    const { hasRole, isLogged } = useAuth();

    if (role && !hasRole(role)) return <Navigate to="/" />

    if (!isLogged()) return <Navigate to={log} state={{from:location}} />
    

    return children;
};

export default PrivateRoute;