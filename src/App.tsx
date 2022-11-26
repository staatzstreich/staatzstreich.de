import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Impress from "./components/Impress";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home"
import Weihnachtsgruss from "./components/Weihnachtsgruss";
import { Route, Routes } from "react-router-dom";
import background from "./img/background.jpg";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundImage: `url(${background})`,
                minHeight: '100vh',
                minWidth: '100vw'
            }}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="impress" element={<Impress />} />
                    <Route path="weihnachtsgruss" element={<Weihnachtsgruss />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </Box>
        </ThemeProvider>
  );
}

export default App;
