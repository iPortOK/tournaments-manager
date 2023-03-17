import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

import './bracket.css';

interface Team {
  name: string;
}

interface Matchup {
  team1: Team | undefined;
  team2: Team | undefined;
  winner: Team | undefined;
}

const TournamentBracket = ({ teams }: { teams: Team[] }) => {
  if (teams.length < 2) {
    return <div>Error: There must be at least 2 teams.</div>;
  }

  const numTeams = teams.length;
  const numRounds = Math.ceil(Math.log2(numTeams)); // Calculate number of rounds
  const bracket: Matchup[][] = [];

  // Create a 2D array to store matchups for each round
  for (let i = 0; i < numRounds; i++) {
    bracket.push([]);
  }

  // Fill out remaining rounds with winners of previous rounds
  for (let i = 0; i < numRounds; i++) {
    const numMatchups = Math.pow(2, numRounds - i - 1);
    for (let j = 0; j < numMatchups; j++) {
      const team1Index = j * 2;
      const team2Index = j * 2 + 1;
      const matchup: Matchup = {
        team1: i === 0 ? teams[team1Index] : bracket[i - 1][j].winner,
        team2: i === 0 ? teams[team2Index] : bracket[i - 1][j + numMatchups].winner,
        winner: undefined,
      };
      bracket[i].push(matchup);
    }
  }

  // Simulate tournament by randomly selecting winners for each matchup
  for (const round of bracket) {
    for (const matchup of round) {
      matchup.winner = Math.random() < 0.5 ? matchup.team1 : matchup.team2;
    }
  }

  return (
    <Grid container spacing={2}>
      {bracket.map((round, i) => (
        <Grid item key={i} xs={12} md={4}>
          <Typography variant="h5" gutterBottom sx={{ marginLeft: '10px' }}>
            Round {i + 1}
          </Typography>
          {round.map((matchup, j) => (
            <Card key={j} sx={{ mb: 2 }} className="matchup-card">
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Matchup {j + 1}
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    {matchup.team1 ? <Typography variant="subtitle1">{matchup.team1.name}</Typography> : <div>&nbsp;</div>}
                  </Grid>
                  <Grid item xs={6}>
                    {matchup.team2 ? <Typography variant="subtitle1">{matchup.team2.name}</Typography> : <div>&nbsp;</div>}
                  </Grid>
                </Grid>
                {matchup.winner && (
                  <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    Winner: {matchup.winner.name}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default TournamentBracket;
