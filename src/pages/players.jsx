import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  TableSortLabel
} from '@mui/material';
import { FilterList, Clear } from '@mui/icons-material';

const Players = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortColumn, setSortColumn] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnName);
      setSortOrder('asc');
    }
  };

  const sortedData = data.sort((a, b) => {
    if (sortColumn) {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
      if (valueB > valueA) return sortOrder === 'asc' ? -1 : 1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    Object.values(item)
      .join('')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <IconButton size="small" onClick={handleClearSearch}>
              <Clear />
            </IconButton>
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'name'}
                  direction={sortOrder}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'age'}
                  direction={sortOrder}
                  onClick={() => handleSort('age')}
                >
                  Age
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'gender'}
                  direction={sortOrder}
                  onClick={() => handleSort('gender')}
                >
                  Gender
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Players;