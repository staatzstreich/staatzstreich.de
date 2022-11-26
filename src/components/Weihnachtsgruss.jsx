import { Box, Typography } from "@mui/material";
import ResponsiveDialog from "./ResponsiveDialog";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import ModalImage from "react-modal-image";
import "./weihnachtsgruss.css";

import background from "../img/bg.jpg";
import Weihnachten2021_1 from '../img/Weihnachten2021_1.png'
import Weihnachten2021_1_thumb from '../img/Weihnachten2021_1_thumb.png'
import Weihnachten2021_2 from '../img/Weihnachten2021_2.png'
import Weihnachten2021_2_thumb from '../img/Weihnachten2021_2_thumb.png'
import Weihnachten2021_3 from '../img/Weihnachten2021_3.png'
import Weihnachten2021_3_thumb from '../img/Weihnachten2021_3_thumb.png'
import Weihnachten2021_4 from '../img/Weihnachten2021_4.png'
import Weihnachten2021_4_thumb from '../img/Weihnachten2021_4_thumb.png'

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Weihnachtsgruss = () => {

    return (
        <Box sx={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundImage: `url(${background})`,
            minHeight: '100vh',
            minWidth: '100vw'
        }}>
            <ThemeProvider theme={theme}>
                <Box sx={{ pt: 4 }}>
                    <Typography variant="h2" color="white" align="center">Frohe</Typography>
                    <Typography variant="h1" color="white" align="center">Weihnachten 2022</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ModalImage
                        small={Weihnachten2021_1_thumb}
                        large={Weihnachten2021_1}
                        alt="Weihnachten2021_1"
                        className="box1"
                    />
                    <ModalImage
                        small={Weihnachten2021_2_thumb}
                        large={Weihnachten2021_2}
                        alt="Weihnachten2021_2"
                        className="box2"
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
                    <ResponsiveDialog />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ModalImage
                        small={Weihnachten2021_3_thumb}
                        large={Weihnachten2021_3}
                        alt="Weihnachten2021_3"
                        className="box2"
                    />
                    <ModalImage
                        small={Weihnachten2021_4_thumb}
                        large={Weihnachten2021_4}
                        alt="Weihnachten2021_4"
                        className="box1"
                    />
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default Weihnachtsgruss;
