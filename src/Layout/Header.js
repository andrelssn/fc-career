import React from "react";
import { AppBar, Box, Divider, Tab, Tabs, Typography } from "@mui/material";

// img
import img from "../Images/Logo/futebol (1).png";

// Styles
import "./Style.css";

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar className="header-style">
            <Box display={"grid"} justifyContent={"center"} alignItems={"center"}>
                <Typography variant="h5" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <img alt="logo" src={img} style={{ width: 40, height: 40, marginRight: 10 }}/>
                    <span>FC Career Generator</span>
                </Typography>

                <Tabs
                    value={value}
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
                    }}
                >
                    <Tab label="Página Inicial" sx={{ fontSize: 12 }}/>
                    <Tab label="Gerador" sx={{ fontSize: 12 }}/>
                    <Tab label="Informações" sx={{ fontSize: 12 }}/>
                </Tabs>
            </Box>
        </AppBar>
    );
}