import React from "react";
import { Autocomplete, Box, Button, CircularProgress, Fade, LinearProgress, TextField, Typography } from "@mui/material";

// Styles
import "./Style.css";
import { autoCompleteStyleUser } from "../Styles/StylesGlobal";

// Services
import { getData, getDataIgm } from "../../Services/Api";

export default function SelectTeam(props) {
    const {
        apiLeagues,
        selectedLeague,
        setSelectedLeague,
        selectedTeam,
        setSelectedTeam
    } = props;

    const [apiTeams, setApiTeams]             = React.useState(null);
    const [apiLogo, setApiLogo]               = React.useState(null);

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

    if(!apiLeagues) return <CircularProgress/>;

    const optionsLeague = apiLeagues.map((data) => ({ value: data.id, label: data.name, country: data.country, division: data.division, difficulty: data.difficulty }));
    const optionsTeams  = apiTeams && apiTeams.map((data) => ({ value: data.Id, label: data.Name, city: data.City, stadium: data.Stadium, size: data.Size }));

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
                    !apiLogo
                        ? (
                            <Typography textAlign={"center"} color="var(--text-secondary)">
                                Select Your Team
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

            <Autocomplete
                disablePortal
                options={optionsLeague}
                sx={autoCompleteStyleUser}
                onChange={(e, v) => getLeagueTeams(v)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        variant="standard"
                        label="Select League"
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
                            onChange={(e, v) => getTeamsLogo(v)}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Select Team"
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

            <Button className="global-btn-style" sx={{ mt: 2 }}>
                Confirm
            </Button>
        </Box>
    );
}