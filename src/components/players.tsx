import React from 'react';
import { makeStyles } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';



const playerData = [
  { name: 'John', kills: 10, deaths: 5, assists: 3 },
  { name: 'Jane', kills: 8, deaths: 7, assists: 2 },
  { name: 'Bob', kills: 12, deaths: 3, assists: 6 },
];

function PlayerTable() {


  return (
    <TableContainer component={Paper}>
      <Table  aria-label="player table">
        <TableHead>
          <TableRow>
            <TableCell>Name of the player</TableCell>
            <TableCell align="right">Kills</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Assists</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {playerData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.kills}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.assists}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlayerTable;