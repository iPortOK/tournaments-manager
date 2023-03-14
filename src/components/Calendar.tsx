import { useState } from 'react';
import { Calendar as MuiCalendar, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, Typography } from '@mui/material';

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <MuiCalendar
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Box>
      <Typography variant="h6" align="center" gutterBottom>
        Selected Date: {selectedDate.toLocaleDateString()}
      </Typography>
    </LocalizationProvider>
  );
}

export default Calendar;
