import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "@/shared/lib/router/protected-route";
import { ROUTES } from "@/shared/lib/constants/routes";

import {Layout} from "@/widgets/layout/layout"
import { Login } from "@/pages/login";
import { Register } from "@/pages/register";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.login} element={<Login />} />
                <Route path={ROUTES.register} element={<Register />} />

                <Route path={ROUTES.home} element={
                    <ProtectedRoute>
                        <Layout>
                            <div className="text-green-500 text-9xl">MAIN PAGE</div>
                        </Layout>
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    );
};
