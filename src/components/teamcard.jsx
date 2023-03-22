import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';


const TeamCard = ({ teamName, names }) => {
  return (
    <Card sx={{m:2, p:1, pr:5, maxWidth:300, width:300, borderRadius:3, boxShadow: "1px 1px 10px rgba(0,0,0,0.25)", backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {teamName}
        </Typography>
        <Typography color="textSecondary">
          Members:
        </Typography>
        {names.map((name, index) => (
          <Typography key={index} variant="body2" component="p" sx={{fontSize:17}}>
            {name}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamCard;