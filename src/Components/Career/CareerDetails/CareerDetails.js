import React from "react";
import { Box, Button, CircularProgress, Collapse, IconButton, Rating, Typography } from "@mui/material";
import { Trans } from "react-i18next";

// Icons
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import StarIcon from '@mui/icons-material/Star';
import MenuIcon from '@mui/icons-material/Menu';

// Style
import "./Style.css";

// Icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Services
import { getData } from "../../../Services/Api";

// Components
import Goals from "./Goals/Goals";
import Achievements from "./Achievements/Achievements";
import Records from "./Records/Records";
import ToWin from "./ToWin/ToWin";

export default function CareerDetails(props) {
    const {
        changePage,
        selectedLeague,
        selectedTeam,
        apiLogo
    } = props;

    const [apiDetails, setApiDetails] = React.useState(null);

    const [openGoals, setOpenGoals]               = React.useState(false);
    const [openAchievements, setOpenAchievements] = React.useState(false);
    const [openRecords, setOpenRecords]           = React.useState(false);
    const [openToWin, setOpenToWin]               = React.useState(false);

    React.useEffect(() => {
        getData(`/details/${selectedTeam.value}`).then(response => {
            if(response.status === 200){
                setApiDetails(response.data);
            }
        })
    }, []);

    return (
        <Box className="career-details-container">
            <IconButton onClick={() => changePage(1)}>
                <ArrowBackIcon sx={{ color: "var(--orange)" }}/>
            </IconButton>

            <Box display={"flex"} flexWrap={"wrap"} position={"relative"} overflow={"auto"}>
                <Box className="team-information-box">
                    <Box className="team-basic-information">
                        <div style={{ display: "flex", justifyContent: "center", width: 300, padding: "20px 0px" }}>
                            <img alt="team-logo" src={apiLogo} style={{ width: 150 }}/>
                        </div>

                        <Box display={"grid"} textAlign={"center"}>
                            <Typography fontSize={21} color="var(--text)">
                                {selectedTeam.label}
                            </Typography>

                            <Typography fontSize={16} color="var(--text-secondary)">
                                {selectedLeague.label}
                            </Typography>

                            <Rating
                                name="level"
                                sx={{ fontSize: 24, margin: "auto" }}
                                value={selectedTeam.data.Size}
                                readOnly
                            />
                        </Box>
                    </Box>

                    <Box className="team-basic-information" mt={2}>
                        <Box display={"grid"}>
                            <Typography fontSize={16} color="var(--text)">
                                {selectedTeam.data.Stadium}
                            </Typography>

                            <Typography fontSize={16} color="var(--text-secondary)">
                                {selectedTeam.data.City}, {selectedTeam.data.Foundation}
                            </Typography>

                            <Typography fontSize={16} color="var(--text-secondary)">
                                {selectedTeam.data.Goalscorer} ({selectedTeam.data.Goalscorer_Total} goals)
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                { !apiDetails
                    ? ( <CircularProgress sx={{ margin: "auto", color: "var(--orange)" }}/> )
                    : (
                        <Box className="team-details-box">
                            <Button
                                className="global-btn-style"
                                fullWidth
                                sx={{ fontSize: 18 }}
                                onClick={() => setOpenGoals(!openGoals)}
                            >
                                <TrackChangesIcon sx={{ mr: 1 }}/>
                                <span>
                                    <Trans>Objetivos</Trans>
                                </span>
                                <MenuIcon sx={{ position: "absolute", left: 10 }}/>
                            </Button>

                            <Collapse in={openGoals}>
                                <Goals apiDetails={apiDetails}/>
                            </Collapse>

                            <Button
                                className="global-btn-style"
                                fullWidth
                                sx={{ fontSize: 18, mt: 2 }}
                                onClick={() => setOpenAchievements(!openAchievements)}
                            >
                                <EmojiEventsIcon sx={{ mr: 1 }}/>
                                <span>
                                    <Trans>Títulos</Trans>
                                </span>
                                <MenuIcon sx={{ position: "absolute", left: 10 }}/>
                            </Button>

                            <Collapse in={openAchievements}>
                                <Achievements apiDetails={apiDetails}/>
                            </Collapse>

                            <Button
                                className="global-btn-style"
                                fullWidth
                                sx={{ fontSize: 18, mt: 2 }}
                                onClick={() => setOpenRecords(!openRecords)}
                            >
                                <StarIcon sx={{ mr: 1 }}/>
                                <span>
                                    <Trans>Recordes</Trans>
                                </span>
                                <MenuIcon sx={{ position: "absolute", left: 10 }}/>
                            </Button>

                            <Collapse in={openRecords}>
                                <Records apiDetails={apiDetails}/>
                            </Collapse>

                            <Button
                                className="global-btn-style"
                                fullWidth
                                sx={{ fontSize: 18, mt: 2 }}
                                onClick={() => setOpenToWin(!openToWin)}
                            >
                                <HistoryToggleOffIcon sx={{ mr: 1 }}/>
                                <span>
                                    <Trans>A vencer</Trans>
                                </span>
                                <MenuIcon sx={{ position: "absolute", left: 10 }}/>
                            </Button>

                            <Collapse in={openToWin}>
                                <ToWin apiDetails={apiDetails}/>
                            </Collapse>
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}