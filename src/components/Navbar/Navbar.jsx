import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Auth/AuthContext";
import { useContext } from "react";

const pages = ['Home', 'Tournaments', 'Players', 'Posts','About-Us'];
const settings = ['Profile', 'Logout'];

const Navbar = () => {

  const { currentUser } = useContext(AuthContext);
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
<AppBar sx={{
  position: "sticky",
  backgroundColor:"#141212",
  boxShadow: "0 5px 20px rgba(0,0,0,0.55)",
}}>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
 
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img alt="" src='../img/logo1.png'  width="90" height="90"></img>
        </Box>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mt:4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 300,
              letterSpacing: '.1rem',
              color: '#f08a12',
              textDecoration: 'none',
            }}
          >
            TOURNAMENTS 
          </Typography>
          <Typography 
          variant="h4"
            sx={{
                mt:-3.5,
                ml:-20,
                mr:20,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.2rem',
                color: '#f5f2f1',
                textDecoration: 'none',
              }}
            >
             ZOUNEK
            </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:'white'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`} style={{textDecoration: "none", color:"black"}}>
                    {page}
                    </Link>
                    
                    
                  </Typography>

                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow:1, display: { xs: 'flex', md: 'none' } }}>
          <img alt="" src='../img/logo1.png'  width="80" height="80"></img>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, color: 'white', display: 'block' }}
              >
                <Link to=""></Link>
                <Link style={{
                    fontFamily: 'monospace',
                    letterSpacing: '.1rem',
                    color: '#f08a12',
                    textDecoration: 'none',
                    fontSize: 20,
                    }} to={`/${page}`} >
                {page}
                </Link>
              </Button>
            ))}
          </Box>


          <Box sx={{ flexGrow: 0, }}>
            <Tooltip title="Open">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> 
                <Avatar alt="Port" src={currentUser.profilePic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box onClick={handleOpenUserMenu} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, color: '#f08a12', cursor:'pointer' }}>
            <Typography variant="h6" sx={{ml:1.5}}> {currentUser.name} </Typography>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar