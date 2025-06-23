import React from "react";
import { Box, Fade, LinearProgress } from "@mui/material";

// Style
import "./Style.css";

// Components
import TitlePage from "../../Components/TitlePage/TitlePage";

// Services
import { getData } from "../../Services/Api";

// Components
import ChooseSponsor from "../../Components/Sponsors/ChooseSponsor";

export default function Sponsors() {
    const [apiSponsors, setApiSponsors] = React.useState(null);

    React.useEffect(() => {
        getData('/sponsors').then(response => {
            if(response.status === 200){
                setApiSponsors(response.data);
            }
        });
    }, []);

    if (!apiSponsors) return (
        <Fade in={true}>
            <main className="career-container">
                <TitlePage title={'Patrocinadores (Beta)'} subtitle={'Aqui você poderá escolher o patrocinador para seu jogador do modo carreira, com base em seu geral (GER)'}/>

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
            <Box className="sponsors-container">
                <TitlePage title={'Patrocinadores (Beta)'} subtitle={'Aqui você poderá escolher o patrocinador para seu jogador do modo carreira, com base em seu geral (GER)'}/>

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

                <ChooseSponsor apiSponsors={apiSponsors}/>
            </Box>
        </Fade>
    );
}