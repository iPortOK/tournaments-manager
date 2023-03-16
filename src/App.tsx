import React from 'react';
import logo from './logo.svg';
import { Button } from '@mui/material'
import Navbar from './components/Navbar'
import Spodek from './components/Spodek'
import Calendar from './components/Calendar';
import Tournaments from './components/Tournaments';
import Home from './components/Home';
import {Route, Routes} from "react-router"
import Solo from './components/solo';
import Team from './components/team';
import Players from './components/players';
import Lft from './components/lft';
import Aboutus from './components/aboutus';




function App() {
  return (
    <div>

    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Calendar" element={<Calendar />} />
      <Route path="Tournaments" element={<Tournaments />} />
      <Route path="Tournaments/Solo" element={<Solo />} />
      <Route path="Tournaments/Team" element={<Team />} />
      <Route path="Players" element={<Players />} />
      <Route path="LFT" element={<Lft />} />
      <Route path="About-Me" element={<Aboutus />} />
    </Routes>

    <Spodek/>
    </div>
  );
}

export default App;
