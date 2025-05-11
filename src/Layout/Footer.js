
import React from "react";

// Styles
import "./Style.css";

export default function Footer() {
    const [current, setCurrent] = React.useState(1);

    React.useEffect(() => {
        setTimeout(() => {
            if(current === 1){
                setCurrent(2);
            }

            if(current === 2){
                setCurrent(1);
            }
        }, 10000);
    }, [current]);

    if(current === 1) {
        return (
            <footer className="footer">
                <span>
                    Este projeto é uma aplicação de fã, criada de forma independente, sem fins comerciais.
                    Todas as marcas registradas, logotipos, nomes e imagens relacionados a EA Sports, incluindo a franquia EA Sports FC, são propriedade de Electronic Arts Inc. e seus licenciadores.
                </span>

                <br/>

                <span>Nenhum conteúdo deste projeto é patrocinado, endossado ou administrado por EA Sports.</span>

                <br/>

                <span>Direitos autorais e marcas pertencem aos seus respectivos proprietários.</span>
            </footer>
        );
    };

    if(current === 2) {
        return (
            <footer className="footer">
                <span>
                    Este projeto é uma aplicação de fã, criada de forma independente e sem fins lucrativos, com o único propósito de homenagear e celebrar o futebol.
                    Todas as marcas registradas, logotipos, nomes, uniformes, escudos e demais elementos visuais relacionados a clubes, seleções e organizações de futebol são propriedade de seus respectivos detentores de direitos.
                </span>

                <br/>

                <span>
                    As imagens, nomes e informações utilizadas sobre times de futebol foram obtidas a partir de fontes públicas e têm caráter meramente ilustrativo e informativo.
                    Nenhum conteúdo deste projeto é patrocinado, endossado ou administrado por clubes, federações, ligas ou qualquer outra entidade oficial do futebol.
                </span>
            </footer>
        );
    };
}