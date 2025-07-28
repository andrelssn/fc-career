import { Trans, useTranslation } from "react-i18next";
import { Box, Divider, Rating, Typography } from "@mui/material";

// Style
import "./Style.css";

export default function AboutTeam(props) {
    const {
        selectedTeam
    } = props;

    const { i18n: { language } } = useTranslation();

    if(!selectedTeam) return (
        <Box className="about-container">
            <Box sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center"}}>
                <Typography fontStyle={"italic"} color="var(--text-secondary)">
                    <Trans>Selecione um clube para ver mais</Trans>
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box className="about-container">
            <Typography variant="h5" fontStyle={"italic"} color="var(--text)">
                <Trans>Trilha e informações</Trans>
            </Typography>

            <Divider sx={{ bgcolor: "#ffffff", mt: 1 }}/>

            <Box display={"flex"}>
                <Box sx={{ color: "var(--orange)", mt: 1 }}>
                    <div style={{ marginBottom: "5px" }}>
                        <span style={{ color: "var(--text)", marginBottom: "5px" }}>
                            <Trans>Cidade</Trans>
                        </span> {selectedTeam.data.City}
                    </div>

                    <div style={{ marginBottom: "5px" }}>
                        <span style={{ color: "var(--text)", marginBottom: "5px" }}>
                            <Trans>Estádio</Trans>
                        </span> {selectedTeam.data.Stadium}
                    </div>

                    <div style={{ marginBottom: "5px" }}>
                        <span style={{ color: "var(--text)" }}>
                            <Trans>Fundação</Trans>
                        </span> {selectedTeam.data.Foundation}
                    </div>
                </Box>

                <Box sx={{ color: "var(--orange)", mt: 1, ml: 2 }}>
                    <div style={{ display: "flex", marginBottom: "5px" }}>
                        <span style={{ color: "var(--text)" }}>
                            <Trans>Tamanho do Time</Trans>
                        </span>
                        <Rating name="read-only" sx={{ fontSize: 18, ml: 1 }} value= {selectedTeam.data.Size} readOnly />
                    </div>

                    <div style={{ marginBottom: "5px" }}>
                        <span style={{ color: "var(--text)", marginBottom: "5px" }}>
                            <Trans>Artilheiro</Trans>
                        </span> {selectedTeam.data.Goalscorer}
                    </div>

                    <div style={{ marginBottom: "5px" }}>
                        <span style={{ color: "var(--text)" }}>
                            <Trans>Maior número de gols</Trans>
                        </span> {selectedTeam.data.Goalscorer_Total}
                    </div>
                </Box>
            </Box>

            <Box bgcolor={"var(--theme-dark)"} borderRadius={"10px"} p={"2px 20px"} mt={2}>
                <p>
                    {language === 'pt' ? selectedTeam.data.History_PTBR : selectedTeam.data.History}
                </p>
            </Box>
        </Box>
    );
}