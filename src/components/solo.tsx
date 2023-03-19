import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import theme from './theme';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { Box, Card, CardContent } from '@mui/material';
import TeamCard from './teamcard';
import TournamentBracket from './bracket';


const tabsy = ["Sign-Ups", "Quick Rules", "Teams", "Bracket", "Results"];

const teamData = [
  {
    teamName: 'Team A',
    names: ['John', 'Mary', 'David', 'Sarah', 'Tom']
  },
  {
    teamName: 'Team B',
    names: ['Mike', 'Jennifer', 'Chris', 'Jessica', 'Nick']
  },
  {
    teamName: 'Team A',
    names: ['John', 'Mary', 'David', 'Sarah', 'Tom']
  },
  {
    teamName: 'Team B',
    names: ['Mike', 'Jennifer', 'Chris', 'Jessica', 'Nick']
  },
  {
    teamName: 'Team A',
    names: ['John', 'Mary', 'David', 'Sarah', 'Tom']
  },
];

const teams = [
  { name: "Team 1", seed: 1 },
  { name: "Team 2", seed: 2 },
  { name: "Team 3", seed: 3 },
  { name: "Team 4", seed: 4 },
  { name: "Team 5", seed: 5 },
  { name: "Dummy Team", seed: 6 }
];



const Solo: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  

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
          'linear-gradient(rgba(240, 138, 18, 0.1), rgba(0, 0, 0, 0.5)), url(https://images4.alphacoders.com/997/thumb-1920-997792.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2, 
          zIndex:'-1',
        }}
      ></div>

      <Tabs value={selectedTab} onChange={handleTabChange} sx={{boxShadow: "1px 1px 10px rgba(0,0,0,0.35)"}}>
        {tabsy.map((label) => (
          <Tab key={label} sx={{p: 3, fontSize: 16, color: 'black'}} label={label} />
        ))}
      </Tabs>
      
      {selectedTab === 0 && (
        <Grid container spacing={2} sx={{ p: 5, pl:{xs:5, sm:10}, pr:{xs:5, sm:10} }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" component="h2" sx={{fontWeight:750, pr: { xs: 0, sm: 2 } }}>
              EU TEAM CONQUEST TOURNAMENT
            </Typography>
            <Typography variant="h4" component="h2" sx={{ pr: { xs: 0, sm: 2 } }}>
            March 12 (Sunday) 19:00 CET
            </Typography>
            <Typography variant="h6" component="h2" sx={{ pr: { xs: 0, sm: 2 }, pt:5, }}>
            <Typography>
             Check out  quick-rules for more information.
            </Typography>
            🔶 Prizepool:<br></br>
                </Typography>
            <Typography>
                1st place: 2000 gems<br></br>
                2nd place: 1200 gems<br></br>
                3rd place: 800 gems
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
          <Box sx={{p: 5, pl:{xs:5, sm:10}, pr:{xs:5, sm:10} }} >
            <Typography variant="h2" component="h2" sx={{fontWeight:750, pr: { xs: 0, sm: 2 } }}>
            QUICK RULES
            </Typography>
            <Typography variant="h4" component="h2" sx={{ pr: { xs: 0, sm: 2 } }}>
            Custom Game Settings
            </Typography>
            <Typography variant="h6" component="h2" sx={{ pr: { xs: 0, sm: 2 }, pt:5, }}>
            <Typography>
            Match Type: Joust 
            <br></br>Team Size 2v2
            <br></br>Player Pick: Draft - 8 Bans
            <br></br>Starting Level: Level 3
            <br></br>Starting Gold: 1500
            <br></br>Pause Type: Normal
            <br></br>Region: Europe
            <br></br>Allow Spectators/Record Demo: On
            <br></br>Low Delay: Off
            <br></br>No Spectator Password
            </Typography>
                </Typography>
            <Typography>
            🔸 All games are Best of 1<br></br>
            🔸 No surrender before the 10 minute mark<br></br>
            🔸 If a team doesn't show up in 10 minutes, they get disqualifed<br></br>
            </Typography>
          </Box>
      )}
      {selectedTab === 2 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop:20
        }}> 
      {teamData.map((team, index) => (
        <TeamCard key={index} teamName={team.teamName} names={team.names} />
      ))}
    </div>
      )}
       {selectedTab === 3 && (
               <div>
                <TournamentBracket teams={teams} />
             </div>
      )}
       {selectedTab === 4 && (
        <Typography>This is the content of Tab 5</Typography>
      )}
      </div>
    </ThemeProvider>
  );
}

export default Solo;
