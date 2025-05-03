import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "../../shared/lib/router/protected-route";
import { ROUTES } from "../../shared/lib/constants/routes";


export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.home} element={
                    <ProtectedRoute>
                        <div className={`bg-blue-700`}>MAIN PAGE</div>
                    </ProtectedRoute>} />
                <Route path="/about-us" element={
                    <ProtectedRoute>
                        <div>ABOUT US PAGE</div>
                    </ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    )
}