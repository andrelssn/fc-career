import React from "react";
import { Paper } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./Style.css";

// Components
import MainRouter from "../Router/MainRouter";
import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ isMobile }) {
    const [page, setPage] = React.useState("/");

    function updateKeyHeader(value) {
        setPage(value);
    };

    return (
        <div className="app-container">
            <Header isMobile={isMobile} page={page} setPage={setPage}/>

            <main className="main-content">
                <Paper className="page-style">
                    <BrowserRouter>
                        <MainRouter page={page} updateKeyHeader={updateKeyHeader}/>
                    </BrowserRouter>
                </Paper>
            </main>

            {/* <Footer/> */}
        </div>
    );
};