import React from "react";
import { Fade, LinearProgress } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

// Style
import "./Style.css";

// Components
import SelectTeam from "../../Components/Career/SelectTeam";
import AboutTeam from "../../Components/Career/AboutTeam";
import TitlePage from "../../Components/TitlePage/TitlePage";
import CareerDetails from "../../Components/Career/CareerDetails/CareerDetails";

// Services
import { getData } from "../../Services/Api";

export default function Career({ updateKeyHeader }) {
    useTranslation(); // Para atualizar estado de tradução da pagina

    const [page, setPage]                     = React.useState(1);
    const [apiLeagues, setApiLeagues]         = React.useState(null);
    const [apiTeams, setApiTeams]             = React.useState(null);
    const [apiLogo, setApiLogo]               = React.useState(null);
    const [selectedLeague, setSelectedLeague] = React.useState(null);
    const [selectedTeam, setSelectedTeam]     = React.useState(null);

    React.useEffect(() => {
        updateKeyHeader(window.location.pathname.substring(0));

        getData('/leagues').then(response => {
            if(response.status === 200){
                setApiLeagues(response.data);
            }
        });
    }, []);

    function changePage(value) {
        setPage(value);
    }

    if (!apiLeagues) return (
        <Fade in={true}>
            <main className="career-container">
                <TitlePage title={<Trans>Montar Carreira</Trans>} subtitle={<Trans>Selecione o time, verifique os objetivos e faça história!</Trans>}/>

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
        </Fade>
    );

    return (
        <Fade in={true}>
            <main className="career-container">
                <TitlePage title={<Trans>Montar Carreira</Trans>} subtitle={<Trans>Selecione o time, verifique os objetivos e faça história!</Trans>}/>

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
                    ?  <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: 20 }}>
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
                        <section style={{ display: "flex", marginTop: 20 }}>
                            <CareerDetails
                                changePage={changePage}
                                selectedLeague={selectedLeague}
                                selectedTeam={selectedTeam}
                                apiLogo={apiLogo}
                            />
                        </section>
                    </Fade>
                    : <></>
                }
            </main>
        </Fade>
    );
}