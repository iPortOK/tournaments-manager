import { ThemeProvider } from '@emotion/react';
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import Navbar from './Navbar';
import theme from './theme';
import { Link } from 'react-router-dom';

const Tournaments = () => {
  const tournaments = [
    {
      text: 'Solo',
      color: '240, 138, 18',
      link: 'Solo',
      next: 'The next tournament:',
    },
    {
      text: 'Team',
      color: '39, 99, 245',
      link: 'Team',
      next: 'The next tournament:',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(240, 138, 18, 0.0), rgba(0, 0, 0, 1)), url(https://images4.alphacoders.com/997/thumb-1920-997792.jpg)',
          minHeight: '100vh', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Navbar />
        <Grid container sx={{ textAlign: 'center' }}>
          {tournaments.map(({ text, color, link, next }, index) => (
            <Grid key={index} item xs={6}>
              <Link to={link} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    height: '90vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    backgroundImage: `linear-gradient(rgba(${color}, 0.2), rgba(0, 0, 0, 1))`,
                    transition: 'background-image 0.5s ease, color 0.5s ease',
                    '&:hover': {
                      backgroundImage: `linear-gradient(rgba(${color}, 0.4), rgba(0, 0, 0, 1))`,
                      textShadow: '0px 0px 10px yellow',
                      boxShadow: "0 5px 20px rgba(0,0,0,0.55)",
                    },
                  }}
                >
                  <Box sx={{display:'block'}}>
                  <Typography sx={{fontSize: '60px',}}>{text}</Typography>
                  <Typography sx={{fontSize: '20px',}}>{next}</Typography>
                  <Typography>[Date of the tourney]</Typography>
                  </Box>

                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Tournaments;
