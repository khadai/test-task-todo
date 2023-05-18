import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: '#5DCB42',
        },
    },
    typography: {
        button: {
            textTransform: 'none',
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
