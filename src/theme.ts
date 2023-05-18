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
            fontWeight: 400,
        },
    },
});

theme.components = {
    ...theme.components,
    MuiButton: {
        styleOverrides: {
            outlined: {
                '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                },
            },
        },
    },
};

theme = responsiveFontSizes(theme);

export default theme;
