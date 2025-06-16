import { Box, Divider, Typography } from "@mui/material";

// Style
import "./Style.css";

export default function AboutTeam(props) {
    const {
        selectedTeam
    } = props;

    if(!selectedTeam) return (
        <Box className="about-container">
            <Box sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center"}}>
                <Typography fontStyle={"italic"} color="var(--text-secondary)">
                    Selecione uma equipe para ver mais
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box className="about-container">
            <Typography variant="h5" fontStyle={"italic"} color="var(--text)">
                Trilha e informações
            </Typography>

            <Divider sx={{ bgcolor: "#ffffff", mt: 1 }}/>

            <Box sx={{ color: "var(--orange)", mt: 1 }}>
                <span style={{ color: "var(--text)" }}>Cidade</span> {selectedTeam.city}<br/>
                <span style={{ color: "var(--text)" }}>Estádio</span> {selectedTeam.stadium}<br/>
                <span style={{ color: "var(--text)" }}>Tamanho do Time</span> {selectedTeam.size}
            </Box>
        </Box>
    );
}