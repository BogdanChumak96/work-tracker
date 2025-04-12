import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import {ROUTES} from "../constants/routes.ts";

interface Props {
    children: ReactNode;
}

export const ProtectedRoute=({children}:Props)=>{
    const isAuthenticated:boolean=false //временая заглушка
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.authorization} state={{ from: location }} replace />;
    }
    return <>{children}</>;
}