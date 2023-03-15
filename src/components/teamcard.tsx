import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

interface Props {
  teamName: string;
  names: string[];
}

const TeamCard: React.FC<Props> = ({ teamName, names }) => {
  return (
    <Card sx={{m:2, p:1, pr:5}}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {teamName}
        </Typography>
        <Typography color="textSecondary">
          Members:
        </Typography>
        {names.map((name, index: number) => (
          <Typography key={index} variant="body2" component="p">
            {name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamCard;