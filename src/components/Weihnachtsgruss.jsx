import { Box, Typography } from "@mui/material";
import ResponsiveDialog from "./ResponsiveDialog";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import ModalImage from "react-modal-image";
import "./weihnachtsgruss.css";

import background from "../img/bg.jpg";
import Weihnachten_1 from '../img/Weihnachten_1.png'
import Weihnachten_1_thumb from '../img/Weihnachten_1_thumb.png'
import Weihnachten_2 from '../img/Weihnachten_2.png'
import Weihnachten_2_thumb from '../img/Weihnachten_2_thumb.png'
import Weihnachten_3 from '../img/Weihnachten_3.png'
import Weihnachten_3_thumb from '../img/Weihnachten_3_thumb.png'
import Weihnachten_4 from '../img/Weihnachten_4.png'
import Weihnachten_4_thumb from '../img/Weihnachten_4_thumb.png'

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
                        small={Weihnachten_1_thumb}
                        large={Weihnachten_1}
                        alt="Weihnachten_1"
                        className="box1"
                    />
                    <ModalImage
                        small={Weihnachten_2_thumb}
                        large={Weihnachten_2}
                        alt="Weihnachten_2"
                        className="box2"
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
                    <ResponsiveDialog />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around'}}>
                    <ModalImage
                        small={Weihnachten_3_thumb}
                        large={Weihnachten_3}
                        alt="Weihnachten_3"
                        className="box2"
                    />
                    <ModalImage
                        small={Weihnachten_4_thumb}
                        large={Weihnachten_4}
                        alt="Weihnachten_4"
                        className="box1"
                    />
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default Weihnachtsgruss;
