import React from "react";
import { Autocomplete, Box, Button, CircularProgress, Fade, LinearProgress, TextField, Typography } from "@mui/material";
import { Trans } from "react-i18next";

// Styles
import "./Style.css";
import { autoCompleteStyleUser } from "../Styles/StylesGlobal";

// Services
import { getData, getDataIgm } from "../../Services/Api";

export default function SelectTeam(props) {
    const {
        // apiLeagues,
        apiTeams,
        setApiTeams,
        apiLogo,
        setApiLogo,
        selectedLeague,
        setSelectedLeague,
        selectedTeam,
        setSelectedTeam,
        changePage
    } = props;

    const [loaderTeam, setLoaderTeam]         = React.useState(false);
    const [loaderLogo, setLoaderLogo]         = React.useState(false);

    async function getLeagueTeams(league) {
        setLoaderTeam(true);

        if(league !== null){
            await getData(`/teams/${league.value}`).then(response => {
                if(response.status === 200){
                    setApiTeams(response.data.data.Teams)
                }
            });
        } else {
            setSelectedLeague(null);
            setApiLogo(null);
            setSelectedTeam(null);
        }

        setLoaderTeam(false);
        setSelectedLeague(league);
    };

    async function getTeamsLogo(team) {
        setLoaderLogo(true);

        if(team !== null){
            await getDataIgm(`/imagem/${team.value}`).then(response => {
                if(response.status === 200){
                    const url = URL.createObjectURL(response.data);
                    setApiLogo(url)
                }
            });
        } else {
            setApiLogo(null)
        }

        setSelectedTeam(team);
        setLoaderLogo(false);
    };

    // const optionsLeague = apiLeagues.map((data) => ({ value: data.id, label: data.name, country: data.country, division: data.division, difficulty: data.difficulty }));
    const optionsLeague = [{ value: 1, label: "Premier League" }];
    const optionsTeams  = apiTeams && apiTeams.map((data) => ({ value: data.Id, label: data.Name, data: data }));

    return (
        <Box className="select-team-container">
            <Box className="team-logo-box">
                { loaderLogo && (
                    <CircularProgress
                        size={30}
                        sx={{ display: "flex", justifySelf: "center", color: "var(--orange)" }}
                    /> )
                }

                {!loaderLogo && (
                    !selectedLeague || !selectedTeam
                        ? (
                            <Typography textAlign={"center"} color="var(--text-secondary)">
                                <Trans>Selecione um clube</Trans>
                            </Typography>
                        )
                        : (
                            <Fade in={true}>
                                <div style={{ width: 200, margin: "auto" }}>
                                    <img alt="team-logo" src={apiLogo} style={{ width: 200 }}/>
                                </div>
                            </Fade>
                        )
                    )
                }
            </Box>

            <Box sx={{ height: 120 }}>
                <Autocomplete
                    disablePortal
                    options={optionsLeague}
                    sx={autoCompleteStyleUser}
                    onChange={(e, v) => getLeagueTeams(v)}
                    defaultValue={selectedLeague}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            variant="standard"
                            label={<Trans>Selecionar Liga</Trans>}
                        />
                    }
                    slotProps={{
                        clearIndicator: {
                            sx: {
                                color: 'var(--text)'
                            },
                        },
                    }}
                />

                <br/>

                { loaderTeam && ( <LinearProgress sx={{ color: "var(--orange)", height: 2 }}/> ) }

                { !loaderTeam && (
                    selectedLeague &&
                        ( <Fade in={true}>
                            <Autocomplete
                                disablePortal
                                options={optionsTeams}
                                sx={autoCompleteStyleUser}
                                defaultValue={selectedTeam}
                                onChange={(e, v) => getTeamsLogo(v)}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label={<Trans>Selecionar Clube</Trans>}
                                    />
                                }
                                slotProps={{
                                    clearIndicator: {
                                        sx: {
                                            color: 'var(--text)'
                                        },
                                    },
                                }}
                            />
                        </Fade>
                        )
                    )
                }
            </Box>

            <Button
                disabled={selectedLeague && selectedTeam !== null ? false : true}
                className={selectedLeague && selectedTeam !== null ? "global-btn-style" : "global-btn-off-style"}
                onClick={() => changePage(2)}
                sx={{ mt: 2 }}
            >
                <Trans>Confirmar</Trans>
            </Button>
        </Box>
    );
}