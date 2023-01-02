import React from "react";
import ResponsiveAppBar from './ResponsiveAppBar';
import { Box, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import TYPO3CommunityMember from "../img/Association_Community.svg";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const links = [
    {
        link: "https://de.wikipedia.org/wiki/Webentwicklung",
        text: "Webentwickler"
    },
    {
        link: "https://www.gdata.de",
        text: "bei G DATA"
    },
    {
        link: "https://typo3.org",
        text: "mit TYPO3"
    },
    {
        link: "https://php.net",
        text: "und PHP"
    }
]

const MyTypography = (link, text) => (
    <Typography
        key={text}
        variant="h2"
        noWrap
        component="a"
        href={link}
        target="_blank"
        sx={{
            mt: 5,
            color: 'ghostwhite',
            textDecorationStyle: 'dashed'
        }}
    >
        {text}
    </Typography>
);


const Home = () => {
    return (
        <React.Fragment>
            <ResponsiveAppBar />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                pt: 5,
                pr: {xs: 5, md: 20}
            }}>
                <ThemeProvider theme={theme}>
                    {links.map( (data) => MyTypography(data.link, data.text) )}
                </ThemeProvider>
                <img
                    alt="TYPO3 Community Member Badge"
                    src={TYPO3CommunityMember}
                    style={{ width: 150, paddingTop: 20, paddingRight: 10 }}
                />
            </Box>
        </React.Fragment>
    );
};

export default Home;
