import { Trans } from 'react-i18next';

import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';

export const menuList = [
    {
        label: <Trans>Página Inicial</Trans>,
        route: "/",
        icon: HomeIcon
    },
    {
        label: <Trans>Carreira</Trans>,
        route: "/career",
        icon: AutoAwesomeIcon
    },
    {
        label: <Trans>Sponsors (BETA)</Trans>,
        route: "/sponsors",
        icon: ArticleIcon
    },
    {
        label: <Trans>Informações</Trans>,
        route: "/information",
        icon: InfoIcon
    },
]