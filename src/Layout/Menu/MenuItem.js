import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';

export const menuList = [
    {
        label: "Página Inicial",
        route: "/",
        icon: HomeIcon
    },
    {
        label: "Gerador",
        route: "career",
        icon: AutoAwesomeIcon
    },
    {
        label: "Patrocinadores",
        route: "sponsors",
        icon: ArticleIcon
    },
    {
        label: "Informações",
        route: "information",
        icon: InfoIcon
    },
]