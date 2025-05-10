import { Paper } from "@mui/material";

// Styles
import "./Style.css";

// Components
import MainRouter from "../Router/MainRouter";
import Header from "./Header";

export default function Layout() {

    return (
        <main>
            <Header/>

            <Paper className="page-style">
                <MainRouter/>
            </Paper>
        </main>
    );
};