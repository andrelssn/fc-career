import { Box, Fade, LinearProgress, Typography } from "@mui/material";

// Style
import "./Style.css";

// Img
import fc25 from "../../Images/fc/fc25white.png";
import { Trans } from "react-i18next";

export default function Home() {
    return (
        <Fade in={true}>
            <div className="home-style">
                <Typography variant="h5" color="var(--headline)">
                    <Trans>Bem-vindo</Trans>!
                </Typography>

                <LinearProgress
                    sx={{
                        height: "1px",
                        backgroundColor: 'var(--orange)',
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: '#ec7869'
                        },
                        mt: "5px"
                    }}
                />

                <article className="article-style">
                    <span>
                        <Trans>Você é aquele jogador de FC modo carreira que cansou de tentar ideias novas?</Trans>
                    </span><br/>

                    <span>
                        <Trans>Então está no lugar certo!</Trans>
                    </span>

                    <p>
                        <Trans>
                           Com o FC Career, você poderá gerar uma ideia de Modo Carreira, na qual poderá selecionar a liga e a equipe que deseja jogar.
                           Com base na dificuldade da equipe, você terá objetivos específicos para alcançar durante a temporada com ela.
                        </Trans>
                    </p>

                    <p>
                        <Trans>
                            Cada equipe tem seus objetivos já pré-definidos. Ao selecioná-la, também exibiremos informações do clube, como conquistas, recordes, entre outros.
                            Além disso, serão mostrados os títulos a serem conquistados e as ambições cruciais do clube.
                        </Trans>
                    </p>
                </article>

                <Box mt={5}>
                    <Typography variant="h5" color="var(--headline)">
                        <Trans>Edições presentes</Trans>
                    </Typography>

                    <LinearProgress
                        sx={{
                            height: "1px",
                            backgroundColor: 'var(--orange)',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#ec7869'
                            },
                            mt: "5px"
                        }}
                    />

                    <div style={{ marginTop: 20 }}>
                        <img alt="fc25" title="fc25" src={fc25} style={{ width: 260 }}/>
                    </div>
                </Box>

                <Box mt={5}>
                    <Typography variant="h5" color="var(--headline)">
                        <Trans>Vídeo de Apresentação</Trans>
                    </Typography>

                    <LinearProgress
                        sx={{
                            height: "1px",
                            backgroundColor: 'var(--orange)',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#ec7869'
                            },
                            mt: "5px"
                        }}
                    />

                    <div style={{ color: "var(--text-secondary)" }}>
                        <Trans>em breve</Trans>
                    </div>
                </Box>
            </div>
        </Fade>
    );
}