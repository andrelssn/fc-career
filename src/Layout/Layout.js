import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// Components
import MainRouter from "../Router/MainRouter";
import Header from "./Header";

export default function Layout() {

    return (
        <main>
            <Header/>

            <MainRouter/>
        </main>
    );
};