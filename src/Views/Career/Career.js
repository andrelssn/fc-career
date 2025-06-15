import { LinearProgress } from "@mui/material";

// Style
import "./Style.css";

// Components
import SelectTeam from "../../Components/Career/SelectTeam";
import AboutTeam from "../../Components/Career/AboutTeam";
import TitlePage from "../../Components/TitlePage/TitlePage";

export default function Career() {
    return (
        <main className="career-container">
            <TitlePage title={"Montar Carreira"} subtitle={"Selecione o time, verifique os objetivos e faça história!"}/>

            <LinearProgress
                sx={{
                    height: "1px",
                    backgroundColor: 'var(--orange)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#ec7869'
                    },
                    mt: "15px"
                }}
            />

            <section style={{ display: "flex" }}>
                <SelectTeam/>
                <AboutTeam/>
            </section>
        </main>
    );
}