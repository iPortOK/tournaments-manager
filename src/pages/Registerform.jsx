import { ThemeProvider } from '@emotion/react';
import { Container, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import Typography from '@mui/material/Typography';
import {Link } from 'react-router-dom';
import theme from '../components/theme';

const Registerform = () => {
  
  return (
    <ThemeProvider theme={theme}>
        <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
          'linear-gradient(rgba(240, 138, 18, 0.1), rgba(0, 0, 0, 0.5)), url(https://images4.alphacoders.com/997/thumb-1920-997792.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2, 
          zIndex:'-1',
        }}
      ></div>
      
      <Container
        maxWidth="xl"
        sx={{
          minHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box sx={{ justifyContent: 'center', alignItems: 'center', textAlign:'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius:4, pt:3, pr:10, pl:10, pb:1, boxShadow: "1px 1px 20px rgba(0,0,0,0.25)", mt:-10 }}>
        <Typography color="primary.main" variant="h4" sx={{mb:3}}>Register</Typography>
          <form style={{ display: 'flex', flexDirection: 'column',width:350 }}>
          <TextField variant="filled" label="Username" type="text" />
          <TextField variant="filled" label="Emaill" type="email"/>
          <TextField variant="filled" label="Password" type="Password"/>
          <TextField variant="filled" label="Name" type="text"/>
          <Button variant="contained">Register</Button>
          </form>
        <Typography variant="body1" sx={{mt:4}} color="#363636" >Do you have an account?</Typography>
        <Link to={'/login'}>
        <Button variant='text' sx={{mt:-4}}>Login</Button>
        </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Registerform;