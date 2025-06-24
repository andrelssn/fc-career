import { Box, Typography } from "@mui/material";


export default function TitlePage(props) {
    const {
        title,
        subtitle
    } = props;

    return (
        <Box>
            <Typography variant="h4">
                {title}
            </Typography>

             <Typography fontStyle={"italic"} color="var(--text-secondary)">
                {subtitle}
            </Typography>
        </Box>
    );
}