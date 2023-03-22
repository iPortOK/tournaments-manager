import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      marginBottom: '1rem',
      color: '#f08a12',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1.1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      marginBottom: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#f08a12',
    },
    secondary: {
      main: '#f08a12',
    },
  },
});

export default theme;