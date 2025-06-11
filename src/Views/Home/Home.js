import { Box, LinearProgress, Typography } from "@mui/material";

// Style
import "./Style.css";

// Img
import fc25 from "../../Images/fc/fc25.png";


// import { getData } from "../../Services/Api";

export default function Home() {

    // React.useEffect(() => {
    //     getData('/leagues').then(response => {
    //         if(response.status === 200){
    //             console.log(response)
    //         }
    //     });
    // }, []);

    return (
        <div className="home-style">
            <Typography variant="h5" color="var(--headline)">
                Bem-vindo!
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
                <span>Você é aquele jogador de FC modo carreira que cansou de tentar ideias novas?</span><br/>
                <span>Então está no lugar certo!</span>

                <p>
                    Com o <span style={{ fontWeight: "bold" }}>FC Career Generator</span> você poderá gerar uma ideia de modo carreira, no qual poderá selecionar a liga e equipe
                    que deseja jogar, e com base na dificuldade da equipe, você terá objetivos especificos para alcançar na temporada com a mesma.
                </p>

                <p>
                    Cada equipe tem seus objetivos já pré-definidos, também ao selecionar, mostraremos informações da equipe, conquistas, recordes, etc. Com a demonstração
                    também de títulos a serem conquistados, e ambições cruciais do clube.
                </p>
            </article>

            <Box mt={5}>
                <Typography variant="h5" color="var(--headline)">
                    Edições presentes
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

                <div>
                    <img alt="fc25" title="fc25" src={fc25} style={{ width: 260 }}/>
                </div>
            </Box>

            <Box mt={5}>
                <Typography variant="h5" color="var(--headline)">
                    Vídeo de Apresentação
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

                <div>video</div>
            </Box>
        </div>
    );
}