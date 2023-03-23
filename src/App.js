import { AuthContext } from './Auth/AuthContext';
import { createBrowserRouter, Navigate, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Spodek from './components/Footer/Spodek';
import Registerform from './pages/Registerform';
import Loginform from './pages/Loginform';
import Posts from './pages/Posts';
import { useContext } from "react";
import Home from './pages/Home';
import Solo from './components/tourney_comp/solo';
import Tournaments from './pages/Tournaments';
import Players from './pages/Players';
import AboutUs from './pages/AboutUs';
import Team from './components/tourney_comp/team';


function App() {

  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Spodek />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Tournaments",
          element: <Tournaments />,
        },
        {
          path: "/Tournaments/team",
          element: <Team />,
        },
        {
          path: "/tournaments/solo",
          element: <Solo />,
        },
        {
          path: "/players",
          element: <Players />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "About-us",
          element: <AboutUs />,
        },
        {
          path: "*",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Loginform />,
    },
    {
      path: "/register",
      element: <Registerform />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;