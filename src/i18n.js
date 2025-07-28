import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            // Header
            "Página Inicial": "Home Page",
            "Carreira": "Career",
            "Patrocinadores": "Sponsors",
            "Informações": "Information",

            // Home Page
            "Bem-vindo": "Welcome",
            "Você é aquele jogador de FC modo carreira que cansou de tentar ideias novas?": "Are you that FC Career Mode player who's tired of trying new ideas?",
            "Então está no lugar certo!": "Then you're in the right place!",
            "Com o FC Career, você poderá gerar uma ideia de Modo Carreira, na qual poderá selecionar a liga e a equipe que deseja jogar. Com base na dificuldade da equipe, você terá objetivos específicos para alcançar durante a temporada com ela.": "With FC Career, you can generate a Career Mode idea where you choose the league and team you want to play with. Based on the team's difficulty, you'll receive specific objectives to achieve throughout the season.",
            "Cada equipe tem seus objetivos já pré-definidos. Ao selecioná-la, também exibiremos informações do clube, como conquistas, recordes, entre outros. Além disso, serão mostrados os títulos a serem conquistados e as ambições cruciais do clube.": "Each team has its own predefined objectives. When you select a team, we’ll also show you club information such as achievements, records, and more. You’ll also see the titles to be pursued and the club’s key ambitions.",
            "Edições presentes": "Available Editions",
            "Vídeo de Apresentação": "Presentation Video",
            "em breve": "soon",

            // Career
            "Montar Carreira": "Build Career",
            "Selecione o time, verifique os objetivos e faça história!": "Select your team, check the objectives, and make history!",
            "Selecione um clube": "Select a club",
            "Selecionar Liga": "Select League",
            "Selecionar Clube": "Select Club",
            "Confirmar": "Confirm",
            "Selecione um clube para ver mais": "Select a club to see more",
            "Trilha e informações": "Track and information",
            "Cidade": "City",
            "Estádio": "Stadium",
            "Fundação": "Foundation",
            "Tamanho do Time": "Team Size",
            "Artilheiro": "Goalscorer",
            "Maior número de gols": "Most goals scored",
            "Objetivos": "Objectives",
            "Títulos": "Achievements",
            "Recordes": "Records",
            "A vencer": "To Win",
            "Objetivo": "Objective",
            "Dificuldade": "Difficulty",
            "Este time já ganhou todos os títulos possíveis a ele.": "This team has already won all the possible titles.",

            // Sponsors
            "Patrocinadores (Beta)": "Sponsors (Beta)",
            "Aqui você poderá escolher o patrocinador para seu jogador do modo carreira, com base em seu geral (GER)": "Here you can choose a sponsor for your Career Mode player, based on their overall rating (OVR).",
            "Digite o geral de seu jogador": "Enter your player's overall rating.",
            "Marca": "Brand",
            "Patrocinador": "Sponsor",
            "Geral (GER)": "Overall (OVR)",

            // Information
            "Informações úteis e contato": "Useful information and contact",
            "Este projeto é uma aplicação de fã, criada de forma independente, sem fins comerciais. Todas as marcas registradas, logotipos, nomes e imagens relacionados a EA Sports, incluindo a franquia EA Sports FC, são propriedade de Electronic Arts Inc. e seus licenciadores.": "This project is a fan-made application, created independently and without commercial purposes. All trademarks, logos, names, and images related to EA Sports, including the EA Sports FC franchise, are the property of Electronic Arts Inc. and its licensors.",
            "Nenhum conteúdo deste projeto é patrocinado, endossado ou administrado por EA Sports.": "No content of this project is sponsored, endorsed, or administered by EA Sports.",
            "Direitos autorais e marcas pertencem aos seus respectivos proprietários.": "Copyrights and trademarks belong to their respective owners.",
            "Este projeto é uma aplicação de fã, criada de forma independente e sem fins lucrativos, com o único propósito de homenagear e celebrar o futebol. Todas as marcas registradas, logotipos, nomes, uniformes, escudos e demais elementos visuais relacionados a clubes, seleções e organizações de futebol são propriedade de seus respectivos detentores de direitos.": "This project is a fan-made application, created independently and without profit, with the sole purpose of honoring and celebrating football. All trademarks, logos, names, uniforms, crests, and other visual elements related to clubs, national teams, and football organizations are the property of their respective rights holders.",
            "As imagens, nomes e informações utilizadas sobre times de futebol foram obtidas a partir de fontes públicas e têm caráter meramente ilustrativo e informativo. Nenhum conteúdo deste projeto é patrocinado, endossado ou administrado por clubes, federações, ligas ou qualquer outra entidade oficial do futebol.": "The images, names, and information used about football teams were obtained from public sources and are for illustrative and informational purposes only. No content of this project is sponsored, endorsed, or administered by clubs, federations, leagues, or any other official football entities.",
            "Deseja enviar sugestões ou conversar sobre outros assuntos?": "Would you like to send suggestions or talk about other topics?",
            "Entre em contato": "Contact me",
            "Enviar Email": "Send Email"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: !localStorage.getItem("language") ? "en" : localStorage.getItem("language"), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
        escapeValue: false // react already safes from xss
        }
    });

export default i18n;