import React from "react";
import { Box, IconButton } from "@mui/material";

// Icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Services
import { getData } from "../../../Services/Api";

export default function CareerDetails({ changePage }) {

    React.useEffect(() => {
        // getData()
    }, []);

    return (
        <Box className="career-details-container">
            <IconButton onClick={() => changePage(1)}>
                <ArrowBackIcon sx={{ color: "var(--orange)" }}/>
            </IconButton>

            <Box>
                content
            </Box>
        </Box>
    );
}