import React from "react";
import { Box, Button, CircularProgress, Fade, MenuItem, TextField, Typography } from "@mui/material";
import { Trans } from "react-i18next";

// Styles
import "./Style.css";

// Services
import { getDataIgm } from "../../Services/Api";

export default function ChooseSponsor({ apiSponsors }){
    const [playerGeral, setPlayerGeral]   = React.useState(null);
    const [optionsBrand, setOptionsBrand] = React.useState([]);
    const [apiLogo, setApiLogo]           = React.useState(null);
    const [loaderLogo, setLoaderLogo]     = React.useState(false);
    const [key, setKey]                   = React.useState(1);

    function getSponsors() {
        let arr = [];

        setOptionsBrand([]);
        setApiLogo(null);
        setKey(key + 1);

        if(playerGeral < 60){
            apiSponsors.map((data) => data.size === '1' && arr.push(data));
        };

        if(playerGeral > 60 && playerGeral < 70){
            apiSponsors.map((data) => data.size === '2' && arr.push(data));
        };

        if(playerGeral > 70 && playerGeral < 80){
            apiSponsors.map((data) => data.size === '3' && arr.push(data));
        };

        if(playerGeral > 80 && playerGeral < 86){
            apiSponsors.map((data) => data.size === '4' && arr.push(data));
        };

        if(playerGeral > 86){
            apiSponsors.map((data) => data.size === '5' && arr.push(data));
        };

        setOptionsBrand(arr);
    }

    async function getBrandLogo(value) {
        setLoaderLogo(true);
        setApiLogo(null);

        await getDataIgm(`/sponsors/logo/${value}`).then(response => {
            if(response.status === 200){
                const url = URL.createObjectURL(response.data);
                setApiLogo(url);
            }
        });

        setLoaderLogo(false);
    }

    return (
        <Box className="choose-sponsor">
            <Box className="player-geral">
                <Typography>
                    <Trans>Digite o geral de seu jogador</Trans>
                </Typography>

                <TextField
                    fullWidth
                    size="small"
                    type="number"
                    label={<Trans>Geral (GER)</Trans>}
                    slotProps={{
                        input: {
                            style: {
                                color: "var(--text)"
                            }
                        }
                    }}
                    sx={{
                        color: "var(--text)",
                        '& .MuiInputBase-root': {
                            backgroundColor: 'var(--theme-dark)',
                        },
                        '& .MuiInputLabel-root': {
                            color: 'var(--text)',
                        },
                        m: "20px 0px"
                    }}
                    onChange={(e) => setPlayerGeral(e.target.value)}
                />


                <Button onClick={() => getSponsors()} className="global-btn-style">
                    <Trans>Confirmar</Trans>
                </Button>
            </Box>

            <Box className="brand">
                <Box className="brand-logo-box">
                    { loaderLogo && (
                        <CircularProgress
                            size={30}
                            sx={{
                                display: "flex",
                                justifySelf: "center",
                                color: "var(--text)",
                                alignSelf: "center",
                                margin: "auto"
                            }}
                        /> )
                    }

                    {!loaderLogo && (
                        !apiLogo
                            ? (
                                <Typography
                                    alignSelf={"center"}
                                    textAlign={"center"}
                                    color="var(--text)"
                                    width={"100%"}
                                >
                                    <Trans>Marca</Trans>
                                </Typography>
                            )
                            : (
                                <Fade in={true}>
                                    <div style={{ width: 160, margin: "auto" }}>
                                        <img alt="team-logo" src={apiLogo} style={{ width: 160 }}/>
                                    </div>
                                </Fade>
                            )
                        )
                    }
                </Box>

                { optionsBrand && (
                    <TextField
                        key={key}
                        select
                        size="small"
                        label={<Trans>Patrocinador</Trans>}
                        onChange={(e) => getBrandLogo(e.target.value)}
                        slotProps={{
                            input: {
                                style: {
                                    color: "var(--text)"
                                }
                            },
                            select: {
                                MenuProps: {
                                    sx: {
                                        maxHeight: "40%",
                                        borderRadius: 2,
                                        '& .MuiMenuItem-root': {
                                            padding: '10px 20px',
                                        },
                                        '& .MuiMenuItem-root:hover': {
                                            color: "var(--text)",
                                            backgroundColor: 'var(--orange)',
                                        },
                                    }
                                }
                            }
                        }}
                        sx={{
                            color: "var(--text)",
                            '& .MuiInputBase-root': {
                                backgroundColor: 'var(--theme)',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'var(--text)',
                            },
                            mb: 3
                        }}
                    >
                        { optionsBrand.map((data) => {
                            return (
                                <MenuItem value={data.id}>
                                    {data.name}
                                </MenuItem>
                            );
                        })}
                    </TextField>)
                }
            </Box>
        </Box>
    );
}