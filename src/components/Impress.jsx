import ResponsiveAppBar from './ResponsiveAppBar';
import { Avatar, Box, Typography } from "@mui/material";
import IMG_0280 from '../img/IMG_0280.png';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Impress = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                mt:4,
                pr: { xs: 5, md: 20 }
            }}>
                <ThemeProvider theme={theme}>
                    <Avatar
                        alt="Michael Staatz"
                        src={IMG_0280}
                        sx={{
                            mb: 2,
                            mr: {xs: 5, md: 2},
                            width: {xs:100, md:200},
                            height: {xs:98, md:196}
                        }}
                    />

                    <Typography variant="h4" color="ghostwhite">
                        Michael Staatz<br/>
                        Tertiustörn 4<br/>
                        25704 Meldorf
                    </Typography>
                </ThemeProvider>
            </Box>
        </>
    );
}

export default Impress;
