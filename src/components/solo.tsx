import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Navbar from './Navbar';
import theme from './theme';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

const Solo: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabsy = ["Sign-Ups", "Quick Rules", "Rosters", "Bracket", "Results"];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  
  return (
    <ThemeProvider theme={theme}>
     <div
      style={{
        position: 'relative',
        height: '100vh',
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
          'linear-gradient(rgba(240, 138, 18, 0.1), rgba(0, 0, 0, 0.5)), url(https://images4.alphacoders.com/997/thumb-1920-997792.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2, 
        }}
      ></div>

      <Navbar/>

      <Tabs value={selectedTab} onChange={handleTabChange} sx={{boxShadow: "1px 1px 10px rgba(0,0,0,0.35)"}}>
        {tabsy.map((label) => (
          <Tab key={label} sx={{p: 3, fontSize: 16, color: 'black'}} label={label} />
        ))}
      </Tabs>
      
      {selectedTab === 0 && (
        <Grid container spacing={2} sx={{ p: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" component="h2" sx={{fontWeight:750, pr: { xs: 0, sm: 2 } }}>
              EU TEAM CONQUEST TOURNAMENT
            </Typography>
            <Typography variant="h4" component="h2" sx={{ pr: { xs: 0, sm: 2 } }}>
              14.03.2023 // 19:00 CEST
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color={'primary.main'} sx={{fontSize:28}} >Sign-up your team!</Typography>
            <form>
              <TextField label="Team Name" variant="outlined" fullWidth sx={{ mb: 1, }} />
              <TextField label="Player 1" variant="outlined" fullWidth sx={{ mb: 1 }} />
              <TextField label="Player 2" variant="outlined" fullWidth sx={{ mb: 1 }} />
              <TextField label="Player 3" variant="outlined" fullWidth sx={{ mb: 1 }} />
              <TextField label="Player 4" variant="outlined" fullWidth sx={{ mb: 1 }} />
              <TextField label="Player 5" variant="outlined" fullWidth sx={{ mb: 1 }} />
              <TextField label="Captain's Discord (xxx#9999)" variant="outlined" fullWidth sx={{ mb: 1 }} />
              <Button sx={{fontSize:20, p:1, fontWeight:600, borderWidth:2 }} variant="outlined">Sign up</Button>
            </form>
          </Grid>
        </Grid>
      )}
      {selectedTab === 1 && (
        <Typography>This is the content of Tab 2</Typography>
      )}
      {selectedTab === 2 && (
        <Typography>This is the content of Tab 3</Typography>
      )}
       {selectedTab === 3 && (
        <Typography>This is the content of Tab 4</Typography>
      )}
       {selectedTab === 4 && (
        <Typography>This is the content of Tab 5</Typography>
      )}
      </div>
    </ThemeProvider>
  );
}

export default Solo;
