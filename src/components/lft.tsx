import { ThemeProvider } from '@emotion/react';
import Typography from '@mui/material/Typography';
import React from 'react';
import theme from './theme';

const lft: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
     <div
      style={{
        position: 'relative',
        minHeight: '100vh', 
        overflow: 'hidden', 
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
          'linear-gradient(rgba(240, 138, 18, 0.5), rgba(0, 0, 0, 0.7)), url(https://images2.alphacoders.com/104/1048461.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          zIndex:'-1',
        }}
      ></div>


      </div>
    </ThemeProvider>
  );
}

export default lft;