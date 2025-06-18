import React from "react";
import { Box, IconButton } from "@mui/material";

// Icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Services
import { getData } from "../../../Services/Api";

export default function CareerDetails(props) {
    const {
        changePage,
        selectedLeague,
        selectedTeam,
        apiLogo
    } = props;

    const [apiGoals, setApiGoals] = React.useState(null);

    // React.useEffect(() => {
    //     getData(`/goals/${selectedTeam.value}`).then(response => {
    //         if(response.status === 200){
    //             setApiGoals(response.data);
    //         }
    //     })
    // }, []);

    console.log(apiGoals);

    return (
        <Box className="career-details-container">
            <IconButton onClick={() => changePage(1)}>
                <ArrowBackIcon sx={{ color: "var(--orange)" }}/>
            </IconButton>

            <Box>
                <Box className="team-basic-information">
                    <div style={{ width: 200, margin: "auto" }}>
                        <img alt="team-logo" src={apiLogo} style={{ width: 200 }}/>
                    </div>
                </Box>
            </Box>
        </Box>
    );
}