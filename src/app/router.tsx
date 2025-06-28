import { Login } from "@/pages/login"
import { Register } from "@/pages/register"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className="text-green-500 text-9xl">MAIN PAGE</div>} />
                <Route path="/about-us" element={<div>ABOUT US PAGE</div>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}