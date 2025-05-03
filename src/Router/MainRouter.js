import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// Components
import Home from "../Views/Home/Home";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};