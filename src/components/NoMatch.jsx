import { Box, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "./ResponsiveAppBar";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const NoMatch = () => {
    return (
        <>
            <ResponsiveAppBar />
            <ThemeProvider theme={theme}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    pt: 5,
                    pr: {xs: 5, md: 20}
                }}>
                    <Typography
                        variant="h2"
                        sx={{
                            mt: 5,
                            color: 'ghostwhite',
                        }}
                    >
                        Nicht's gefunden hier: 404!
                    </Typography>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default NoMatch;
