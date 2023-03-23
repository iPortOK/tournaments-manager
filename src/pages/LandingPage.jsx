import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import theme from '../components/theme';
import { Container } from '@mui/system';
import { Box } from '@mui/material';


const LandingPage = () => {


  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(rgba(240, 138, 18, 0.2), rgba(0, 0, 0, 1)), url(https://images5.alphacoders.com/127/1272384.jpg)',
        minHeight: '100vh', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" sx={{ textAlign: { xs: 'center', md: 'initial' } }}>
          <Typography
            variant="h1"
            className='hltext'
            sx={{
              textShadow: '2px 2px 4px #000000',
              pt: { xs: 5, md: 40 }
              }}>
            <b>SMITE</b> COMMUNITY<br></br>Tournaments<br></br><b>Weekly</b>
          </Typography>

          <Box sx={{ display: { sm: 'block', md: 'none' } }}>
            <hr style={{ color: '#f08a12' }}></hr>
          </Box>

          <Typography
            variant="h5"
            borderLeft={10}
            padding={1}
            borderColor="primary.main"
            sx={{
              mb: 10,
              color: 'white',
              textShadow: '2px 2px 4px #000000',
              '@media (max-width: 900px)': {
                borderLeft: 0,
                borderColor: 'transparent'
              }}}>
            SIGN-UP INFO BELLOW
          </Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default LandingPage;