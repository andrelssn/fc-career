import React from "react";
import { Fade, LinearProgress } from "@mui/material";

// Style
import "./Style.css";

// Components
import SelectTeam from "../../Components/Career/SelectTeam";
import AboutTeam from "../../Components/Career/AboutTeam";
import TitlePage from "../../Components/TitlePage/TitlePage";
import CareerDetails from "../../Components/Career/CareerDetails/CareerDetails";

// Services
import { getData } from "../../Services/Api";

export default function Career() {
    const [page, setPage]                     = React.useState(1);
    const [apiLeagues, setApiLeagues]         = React.useState(null);
    const [apiTeams, setApiTeams]             = React.useState(null);
    const [apiLogo, setApiLogo]               = React.useState(null);
    const [selectedLeague, setSelectedLeague] = React.useState(null);
    const [selectedTeam, setSelectedTeam]     = React.useState(null);

    React.useEffect(() => {
        getData('/leagues').then(response => {
            if(response.status === 200){
                setApiLeagues(response.data);
            }
        })
    }, []);

    function changePage(value) {
        setPage(value);
    }

    if (!apiLeagues) return (
        <main className="career-container">
            <TitlePage title={"Montar Carreira"} subtitle={"Selecione o time, verifique os objetivos e faça história!"}/>

            <LinearProgress
                sx={{
                    height: "1px",
                    backgroundColor: 'var(--background)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: 'var(--orange)'
                    },
                    mt: "15px"
                }}
            />
        </main>
    );

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

            { page === 1
                ?  <section style={{ display: "flex", marginTop: 20, height: 500 }}>
                    <SelectTeam
                        apiLeagues={apiLeagues}
                        apiTeams={apiTeams}
                        setApiTeams={setApiTeams}
                        apiLogo={apiLogo}
                        setApiLogo={setApiLogo}
                        selectedLeague={selectedLeague}
                        setSelectedLeague={setSelectedLeague}
                        selectedTeam={selectedTeam}
                        setSelectedTeam={setSelectedTeam}
                        changePage={changePage}
                    />

                    <AboutTeam
                        selectedTeam={selectedTeam}
                    />
                </section>
                : <></>
            }

            { page === 2
                ?  <Fade in={true}>
                    <section style={{ display: "flex", marginTop: 20, height: 500 }}>
                        <CareerDetails changePage={changePage}/>
                    </section>
                </Fade>
                : <></>
            }
        </main>
    );
}