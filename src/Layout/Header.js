import { AppBar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";

// img
import img from "../Images/Logo/futebol (1).png";

// Styles
import "./Style.css";

export default function Header({ page, setPage }) {

    const handleChange = (event, newValue) => {
        setPage(newValue);
    };

    return (
        <AppBar className="header-style">
            <Box display={"grid"}>
                <Typography variant="h5" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <img alt="logo" src={img} style={{ width: 40, height: 40, marginRight: 10 }}/>
                    <span>FC Career Generator</span>
                </Typography>

                <Divider sx={{ bgcolor: "#09080e", mt: 2 }}/>

                <Tabs
                    value={page}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'var(--orange) !important', // Cor do indicador
                        },
                        '& .MuiTab-root': {
                            color: 'var(--text-secondary) !important', // Cor do texto das abas
                            fontWeight: 'bold',
                        },
                        '& .Mui-selected': {
                            color: 'var(--orange) !important', // Cor da aba selecionada
                        },
                        margin: "auto"
                    }}
                >
                    <Tab label="Página Inicial" value={"/"} sx={{ fontSize: 12 }}/>
                    <Tab label="Gerador" value={"generator"} sx={{ fontSize: 12 }}/>
                    <Tab label="Informações" value={"information"} sx={{ fontSize: 12 }}/>
                </Tabs>
            </Box>
        </AppBar>
    );
}