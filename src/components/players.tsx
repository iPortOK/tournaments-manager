import React, { useState } from 'react';
import { makeStyles, TextField, TableSortLabel, Box } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import theme from './theme';
import './style.css';
import { ThemeProvider } from '@emotion/react';
import Navbar from './Navbar';

interface PlayerData {
  name: string;
  kills: number;
  deaths: number;
  assists: number;
}

const playerData: PlayerData[] = [
  { name: 'John', kills: 10, deaths: 5, assists: 3 },
  { name: 'Jane', kills: 8, deaths: 7, assists: 2 },
  { name: 'Bob', kills: 12, deaths: 3, assists: 6 },

];

type SortDirection = 'asc' | 'desc';

interface HeadCell {
  id: keyof PlayerData;
  label: string;
}

const headCells: HeadCell[] = [
  { id: 'name', label: 'Name of the player' },
  { id: 'kills', label: 'Kills' },
  { id: 'deaths', label: 'Deaths' },
  { id: 'assists', label: 'Assists' },
];

function PlayerTable() {
  const [filter, setFilter] = useState('');
  const [orderBy, setOrderBy] = useState<keyof PlayerData>('name');
  const [order, setOrder] = useState<SortDirection>('asc');

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSortClick = (id: keyof PlayerData) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
  };

  const filteredPlayerData = playerData.filter((player) => {
    return player.name.toLowerCase().includes(filter.toLowerCase());
  });

  const sortedPlayerData = filteredPlayerData.sort((a, b) => {
    const isAsc = order === 'asc';
    const compareResult = compareValues(a[orderBy], b[orderBy]);
    return isAsc ? compareResult : -compareResult;
  });

  function compareValues(a: any, b: any) {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  }

  return (
<ThemeProvider theme={theme}>
  <Navbar />
  <div
    style={{
      position: "relative",
      minHeight: '100vh', 
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(rgba(240, 138, 18, 0.4), rgba(0, 0, 0, 0.9)), url(https://mobimg.b-cdn.net/v3/fetch/d8/d825007dc211613c1cdab8e32568881d.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.2,
        zIndex:'-1',
      }}
    ></div>
    
    <Box sx={{ display: "flex", justifyContent: "center", pt:4, pb:1 }}>
    <TextField label="Filter by name" value={filter} onChange={handleFilterChange}/>
    </Box>
 
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TableContainer component={Paper} sx={{ maxWidth: 1400, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        <Table aria-label="player table">
          <TableHead sx={{backgroundColor: 'rgba(240, 138, 18, 1)'}}>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel 
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={() => handleSortClick(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPlayerData.map((row) => (
              <TableRow key={row.name} className="table-row">
                <TableCell component="th" scope="row" className="kills-cell">
                  {row.name}
                </TableCell>
                <TableCell className="kills-cell">{row.kills}</TableCell>
                <TableCell className="kills-cell">{row.deaths}</TableCell>
                <TableCell className="kills-cell">{row.assists}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </div>
</ThemeProvider>


  );
}

export default PlayerTable;
