import { Box } from '@mui/material';
import Button from '@mui/material/Button'
import React from 'react'
import './footer.css';




const Spodek = () => {
  const year = new Date().getFullYear();


  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {year} Zounek Tournaments. All rights reserved.
      </p>
    </footer>
  );
};


export default Spodek