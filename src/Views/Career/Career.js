import React from "react";
import { LinearProgress } from "@mui/material";

// Style
import "./Style.css";

// Components
import SelectTeam from "../../Components/Career/SelectTeam";
import AboutTeam from "../../Components/Career/AboutTeam";
import TitlePage from "../../Components/TitlePage/TitlePage";

// Services
import { getData } from "../../Services/Api";

export default function Career() {
    const [apiLeagues, setApiLeagues] = React.useState(null);
    const [selectedLeague, setSelectedLeague] = React.useState(null);
    const [selectedTeam, setSelectedTeam]     = React.useState(null);

    React.useEffect(() => {
        getData('/leagues').then(response => {
            if(response.status === 200){
                setApiLeagues(response.data);
            }
        })
    }, []);

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

            <section style={{ display: "flex", marginTop: 20, height: 500 }}>
                <SelectTeam
                    apiLeagues={apiLeagues}
                    selectedLeague={selectedLeague}
                    setSelectedLeague={setSelectedLeague}
                    selectedTeam={selectedTeam}
                    setSelectedTeam={setSelectedTeam}
                />

                <AboutTeam
                    selectedTeam={selectedTeam}
                />
            </section>
        </main>
    );
}