import React from "react";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InfoIcon from '@mui/icons-material/Info';

// img
import img from "../Images/Logo/futebol (1).png";

// Styles
import "./Style.css";

export default function Header({ page, setPage }) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleChange = (event, newValue) => {
        setPage(newValue);
    };

    console.log(page);

    const drawer = (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
                className="header-drawer-style"
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    <ListItemButton onClick={() => handleChange('', '/')}>
                        <ListItemIcon sx={ page === '/' ? { color: "var(--orange)" } : { color: "var(--text)" }}>
                            <HomeIcon/>
                        </ListItemIcon>

                        <ListItemText
                            primary={"Página Inicial"}
                            sx={ page === '/' ? { color: "var(--orange)" } : { color: "var(--text)" }}
                        />
                    </ListItemButton>

                    <ListItemButton onClick={() => handleChange('', 'generator')}>
                        <ListItemIcon sx={{ color: "var(--text)" }}>
                            <AutoAwesomeIcon/>
                        </ListItemIcon>

                        <ListItemText
                            primary={"Gerador"}
                            sx={{ color: "var(--text)" }}
                        />
                    </ListItemButton>

                      <ListItemButton onClick={() => handleChange('', 'information')}>
                        <ListItemIcon sx={{ color: "var(--text)" }}>
                            <InfoIcon/>
                        </ListItemIcon>

                        <ListItemText
                            primary={"Informações"}
                            sx={{ color: "var(--text)" }}
                        />
                    </ListItemButton>
                </List>
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
                        <span>FC Career Generator</span>
                    </Typography>
                </Box>
            ) : (
                <Box display={"flex"} justifyContent={"space-between"} p={"10px 20px"}>
                    <Typography variant="h5" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <img alt="logo" src={img} style={{ width: 40, height: 40, marginRight: 10 }}/>
                        <span>FC Career Generator</span>
                    </Typography>

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
                        }}
                    >
                        <Tab label="Página Inicial" value={"/"} sx={{ fontSize: 12 }}/>
                        <Tab label="Gerador" value={"generator"} sx={{ fontSize: 12 }}/>
                        <Tab label="Informações" value={"information"} sx={{ fontSize: 12 }}/>
                    </Tabs>
                </Box>
            )}

            {drawer}
        </AppBar>
    );
}