import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import {ROUTES} from "../constants/routes";

interface Props {
    children: ReactNode;
}

export const ProtectedRoute=({children}:Props)=>{
    const isAuthenticated:boolean=false
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.authorization} state={{ from: location }} replace />;
    }
    return <>{children}</>;
}