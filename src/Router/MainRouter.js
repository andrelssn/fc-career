import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";

// Components
import Home from "../Views/Home/Home";
import Career from "../Views/Career/Career";
import React from "react";

export default function MainRouter({ page }) {

    const navigate = useNavigate();

    React.useEffect(() => {
        navigate(page);
    }, [page]);

    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/career" element={<Career/>}/>
            </Routes>
    );
};