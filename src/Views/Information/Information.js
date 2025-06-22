import { Box, Button, Divider, LinearProgress, Typography } from "@mui/material";

// Styles
import './Style.css';

// Components
import TitlePage from "../../Components/TitlePage/TitlePage";

export default function Information() {
    return (
        <Box className='information-style'>
            <TitlePage title={'Informações'} subtitle={'Informações úteis e contato'}/>

            <LinearProgress
                sx={{
                    height: "1px",
                    backgroundColor: 'var(--orange)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#ec7869'
                    },
                    mt: "15px"
                }}
            />

            <article className="article-box">
                <span>
                    Este projeto é uma aplicação de fã, criada de forma independente, sem fins comerciais.
                    Todas as marcas registradas, logotipos, nomes e imagens relacionados a EA Sports, incluindo a franquia EA Sports FC, são propriedade de Electronic Arts Inc. e seus licenciadores.
                </span>

                <br/>

                <span>Nenhum conteúdo deste projeto é patrocinado, endossado ou administrado por EA Sports.</span>
            </article>

            <article className="article-box">
                <span>Direitos autorais e marcas pertencem aos seus respectivos proprietários.</span>

                <span>
                    Este projeto é uma aplicação de fã, criada de forma independente e sem fins lucrativos, com o único propósito de homenagear e celebrar o futebol.
                    Todas as marcas registradas, logotipos, nomes, uniformes, escudos e demais elementos visuais relacionados a clubes, seleções e organizações de futebol são propriedade de seus respectivos detentores de direitos.
                </span>

                <br/>

                <span>
                    As imagens, nomes e informações utilizadas sobre times de futebol foram obtidas a partir de fontes públicas e têm caráter meramente ilustrativo e informativo.
                    Nenhum conteúdo deste projeto é patrocinado, endossado ou administrado por clubes, federações, ligas ou qualquer outra entidade oficial do futebol.
                </span>
            </article>

            <Divider sx={{ bgcolor: "var(--text)", mt: 10 }}/>

            <Box>
                <Typography variant="h6" color="var(--text)">
                    Deseja enviar sugestões ou conversar sobre outros assuntos?
                </Typography>

                <Typography sx={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
                    Entre em contato
                </Typography>

                <Button
                    variant="contained"
                    href="mailto:andreluissilsan22@gmail.com"
                    className="global-btn-style"
                >
                    Enviar Email
                </Button>
            </Box>
        </Box>
    );
}