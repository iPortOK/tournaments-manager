import Calendar from './components/Calendar';
import Tournaments from './components/Tournaments';
import Home from './components/Home';
import {Route, Routes} from "react-router"
import Solo from './components/solo';
import Team from './components/team';
import Players from './components/players';
import Lft from './components/lft';
import { Navigate } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Spodek from './components/Footer/Spodek';

function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path="home" element={<Home />} />
        <Route path="calendar" element={<Calendar />} />        
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="tournaments/solo" element={<Solo />} />
        <Route path="tournaments/team" element={<Team />} />
        <Route path="players" element={<Players />} />
        <Route path="lft" element={<Lft />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="home" />} />
    </Routes>
    <Spodek/>
    </div>
  );
}

export default App;
