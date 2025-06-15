import React from "react";
import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";

import arsenal from "../../Images/TeamLogos/PremierLeague/arsenal.png"

// Styles
import "./Style.css";
import { autoCompleteStyleUser } from "../Styles/StylesGlobal";

const optionsLeague = [{ value: 1, label: 'Premier League' }];
const optionsTeams  = [{ value: 1, label: 'Arsenal' }];

export default function SelectTeam() {
    const [selectedLeague, setSelectedLeague] = React.useState(null);
    const [selectedTeam, setSelectedTeam]     = React.useState(null);

    console.log(selectedLeague);

    return (
        <Box className="select-team-container">
            <Box className="team-logo-box">
                <div style={{ width: 200, margin: "auto" }}>
                    <img alt="team-logo" src={arsenal} style={{ width: 200 }}/>
                </div>

                {/* <Typography textAlign={"center"} color="var(--text)">
                    Select Your Team
                </Typography> */}
            </Box>

            <Autocomplete
                disablePortal
                options={optionsLeague}
                sx={autoCompleteStyleUser}
                onChange={(e, v) => setSelectedLeague(v)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        variant="standard"
                        label="Select League"
                    />
                }
            />

            <br/>

           { selectedLeague &&
                ( <Autocomplete
                    disablePortal
                    options={optionsTeams}
                    sx={autoCompleteStyleUser}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            variant="standard"
                            label="Select Team"
                        />
                    }
                /> )
            }

            <Button className="global-btn-style" sx={{ mt: 2 }}>
                Confirm
            </Button>
        </Box>
    );
}