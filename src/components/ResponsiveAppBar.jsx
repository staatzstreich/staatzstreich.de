import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';

const ResponsiveAppBar = () => {
    return (
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <CodeIcon sx={{ display: 'flex', mr: 0.5 }}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        staatzstreich.de
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <Button
                            key="impress"
                            component="a"
                            href="/impress"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Impressum
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
