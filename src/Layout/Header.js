import React from "react";
import { AppBar, Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';

// img
import img from "../Images/Logo/futebol (1).png";
import br from "../Images/flags/brasil.png";
import eua from "../Images/flags/eua.png";

// Styles
import "./Style.css";

// Components
import { menuList } from "./Menu/MenuItem";

export default function Header({ isMobile, page, setPage }) {
    const { i18n: {changeLanguage, language} }  = useTranslation();
    const [drawerOpen, setDrawerOpen]           = React.useState(false);
    const [currentLanguage, setCurrentLanguage] = React.useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "pt" : "en";

        localStorage.setItem("language", newLanguage);
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleChange = (event, newValue) => {
        setPage(newValue);
    };

    const drawer = (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
                className="header-drawer-style"
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    { menuList.map((item) => {
                        return (
                            <ListItemButton
                                onClick={() => handleChange('', item.route)}
                                disabled={item.route === "/sponsors" ? true : false}
                                className={page === item.route ? "selected-page-item" : "header-menu-item"}
                            >
                                <ListItemIcon sx={{ color: "var(--text)" }}>
                                    <item.icon/>
                                </ListItemIcon>

                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        );
                    })}
                </List>

                <Box sx={{ position: "absolute", bottom: 5 }}>
                    {
                        currentLanguage === "en"
                        ? (
                            <IconButton
                                size="small"
                                sx={{
                                    height: 40,
                                    ml: 2
                                }}
                                onClick={() => handleChangeLanguage()}
                            >
                                <img alt="flag" src={eua} style={{ width: 25 }} />
                                <span style={{ color: "var(--text)", fontSize: 14, marginLeft: 5 }}>
                                    Switch Language
                                </span>
                            </IconButton>
                        ) : (
                            <IconButton
                                size="small"
                                sx={{
                                    height: 40,
                                    ml: 2,
                                }}
                                onClick={() => handleChangeLanguage()}
                            >
                                <img alt="flag" src={br} style={{ width: 25 }} />
                                <span style={{ color: "var(--text)", fontSize: 14, marginLeft: 5 }}>
                                    Mudar Idioma
                                </span>
                            </IconButton>
                        )
                    }
                </Box>
            </Box>
        </Drawer>
    );

    return (
        <AppBar className="header-style">
            {isMobile ? (
                <Box display={"flex"} p={"10px 20px"}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleDrawer(true)}
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h5" display={"flex"} alignItems={"center"} justifyContent={"center"} ml={1}>
                        <img alt="logo" src={img} style={{ width: 40, height: 40, marginRight: 10 }}/>
                        <span style={{ fontStyle: "italic", fontWeight: "bold", color: "var(--text)" }}>FC Career</span>
                    </Typography>
                </Box>
            ) : (
                <Box display={"flex"} justifyContent={"space-between"} p={"0px 20px"}>
                    <Typography variant="h5" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <img alt="logo" src={img} style={{ width: 40, height: 40, marginRight: 10 }}/>
                        <span style={{ fontStyle: "italic", fontWeight: "bold", color: "var(--text)"  }}>FC Career</span>
                    </Typography>

                    <Box display={"flex"} alignItems={"center"}>
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
                                    color: 'var(--text-secondary)', // Cor do texto das abas
                                    fontWeight: 'bold',
                                },
                                '& .Mui-selected': {
                                    color: 'var(--orange) !important', // Cor da aba selecionada
                                },
                            }}
                        >
                            <Tab label={<Trans>Página Inicial</Trans>} value={"/"} icon={<HomeIcon/>} iconPosition="start" sx={{ fontSize: 12 }}/>
                            <Tab label={<Trans>Carreira</Trans>} value={"/career"} icon={<AutoAwesomeIcon/>} iconPosition="start" sx={{ fontSize: 12 }}/>
                            <Tab disabled label={<Trans>Sponsors (BETA)</Trans>} value={"/sponsors"} icon={<ArticleIcon/>} iconPosition="start" sx={{ fontSize: 12, color: "var(--off) !important" }}/>
                            <Tab label={<Trans>Informações</Trans>} value={"/information"} icon={<InfoIcon/>} iconPosition="start" sx={{ fontSize: 12 }}/>
                        </Tabs>

                        {
                            currentLanguage === "en"
                            ? (
                                <IconButton
                                    size="small"
                                    sx={{
                                        height: 40,
                                        ml: 2
                                    }}
                                    onClick={() => handleChangeLanguage()}
                                >
                                    <img alt="flag" src={eua} style={{ width: 25 }} />
                                </IconButton>
                            ) : (
                                <IconButton
                                    size="small"
                                    sx={{
                                        height: 40,
                                        ml: 2
                                    }}
                                    onClick={() => handleChangeLanguage()}
                                >
                                    <img alt="flag" src={br} style={{ width: 25 }} />
                                </IconButton>
                            )
                        }
                    </Box>
                </Box>
            )}

            {drawer}
        </AppBar>
    );
}