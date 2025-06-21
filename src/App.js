import { useMediaQuery, useTheme } from "@mui/material";

// Style
import "./App.css";

// Components
import Layout from "./Layout/Layout";

function App() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <body id="body" className="App">
            <Layout isMobile={isMobile}/>
        </body>
    );
}

export default App;
