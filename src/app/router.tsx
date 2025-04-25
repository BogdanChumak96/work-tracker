import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>MAIN PAGE</div>} />
                <Route path="/about-us" element={<div>ABOUT US PAGE</div>} />
            </Routes>
        </BrowserRouter>
    )
}