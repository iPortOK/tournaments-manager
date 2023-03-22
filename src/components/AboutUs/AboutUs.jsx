import { ThemeProvider } from '@emotion/react';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import theme from '../theme';

const AboutUs = () => {
  return (
    
    <ThemeProvider theme={theme}>
     <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh', 
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
          'linear-gradient(rgba(240, 138, 18, 0.5), rgba(0, 0, 0, 0.8)), url(https://i.pinimg.com/originals/b5/7f/1c/b57f1c95d068a11dc33644feffc3e3b1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2, 
          zIndex:'-1',
        }}
      ></div>
    <Grid container>
     <Grid item md={12} lg={7}>
      <Box sx={{p: 5, pl:{xs:5, sm:10}, pr:{xs:5, sm:10} }} >
            <Typography variant="h2" component="h2" sx={{fontWeight:750, pr: { xs: 0, sm: 2 } }}>
            ABOUT ME
            </Typography>
            <Typography variant="h4" component="h2" sx={{ pr: { xs: 0, sm: 2 } }}>
            Welcome to my gaming tournament website!
            </Typography>
            <Typography variant="h6" component="h2" sx={{ pr: { xs: 0, sm: 2 }, pt:5, }}>
            <Typography>
            🔸My name is Petr Zounek, and I am a passionate gamer who loves to organize and host exciting gaming events for fellow gamers around the world. I created this website to provide a platform where gamers can come together, connect, and compete against each other in a fun and competitive environment.
            </Typography>
                </Typography>
            <Typography>
            🔸As a lifelong gamer, I understand the importance of community and the joy of playing games with others. I have organized and participated in countless gaming tournaments and events, and I know what it takes to create a successful and enjoyable gaming experience.
            </Typography>
            <Typography>
            🔸With this website, I aim to bring together gamers from all over the world and provide them with a place to showcase their skills, compete against other top players, and win amazing prizes. Whether you are a casual gamer or a serious esports competitor, there is a place for you on my gaming tournament website.
            </Typography>
            <Typography>
            🔸So if you love gaming as much as I do and want to be part of an amazing community of gamers, then join us today and let's take our gaming experience to the next level!
            </Typography>
          </Box>
      </Grid>
      <Grid item lg={5} sx={{display: { md: 'none', lg: 'flex' }}}>
        <Box sx={{  height: '70vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ml:15}}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_510068.png" width="450" height="450" alt="" />
        </Box>
      </Grid>    
    </Grid>     
          
      </div>
    </ThemeProvider>
  );
}

export default AboutUs;