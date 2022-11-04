import { Title } from 'react-admin';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from "./Button.module.css";
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)({
    color: purple[600],
});

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "lime"
                }
            }
        }
    }
});

const MUIButton = () => (
    <Card>
        <Title title="My Button" />
        <Box sx={{ marginTop: 2 }} >
            <Button variant='contained'>MUI Standard</Button>
        </Box>
        <Box sx={{ marginTop: 2 }} >
            <Button variant='contained' sx={{ color: 'red', border: 3 }}>MUI SX STYLES</Button>
        </Box>
        <Box sx={{ marginTop: 2 }} >
            <Button className={styles.button} variant='contained' >MUI REACT CSS MODULE</Button>
        </Box>
        <Box sx={{ marginTop: 2 }} >
            <ColorButton variant='contained'>MUI STYLED BUTTON</ColorButton>
        </Box>
        <Box sx={{ marginTop: 2 }} >
            <ThemeProvider theme={theme}>
                <Button variant='contained'>MUI THEME</Button>
            </ThemeProvider>
        </Box>
    </Card>
);

export default MUIButton;