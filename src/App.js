import { AuthContext } from './Auth/AuthContext';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Spodek from './components/Footer/Spodek';
import Registerform from './pages/Registerform';
import Loginform from './pages/Loginform';
import Posts from './pages/Posts';
import { useContext } from "react";
import Home from './pages/Home';


function App() {

  const {currentUser} = useContext(AuthContext);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Spodek />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
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
          path: "/posts",
          element: <Posts />,
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
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;