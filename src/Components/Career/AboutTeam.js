import { Box, Divider, Rating, Typography } from "@mui/material";

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
                    Selecione um clube para ver mais
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

            <Box display={"flex"}>
                <Box sx={{ color: "var(--orange)", mt: 1 }}>
                    <span style={{ color: "var(--text)" }}>Cidade</span> {selectedTeam.data.City}<br/>
                    <span style={{ color: "var(--text)" }}>Estádio</span> {selectedTeam.data.Stadium}<br/>
                    <span style={{ color: "var(--text)" }}>Fundação</span> {selectedTeam.data.Foundation}
                </Box>

                <Box sx={{ color: "var(--orange)", mt: 1, ml: 2 }}>
                    <div style={{ display: "flex" }}>
                        <span style={{ color: "var(--text)" }}>Tamanho do Time</span>
                        <Rating name="read-only" sx={{ fontSize: 18, ml: 1 }} value= {selectedTeam.data.Size} readOnly />
                    </div>
                    <span style={{ color: "var(--text)" }}>Artilheiro</span> {selectedTeam.data.Goalscorer}<br/>
                    <span style={{ color: "var(--text)" }}>Maior número de gols</span> {selectedTeam.data.Goalscorer_Total}
                </Box>
            </Box>

            <Box bgcolor={"var(--theme-dark)"} borderRadius={"10px"} p={"2px 20px"} mt={2}>
                <p>
                    {selectedTeam.data.History}
                </p>
            </Box>
        </Box>
    );
}