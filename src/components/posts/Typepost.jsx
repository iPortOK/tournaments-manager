import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

const Typepost = () => {

    const {currentUser} = useContext(AuthContext)

  return (
    <Card sx={{m:2, pl:1.5, pr:1.5, pt:3, borderRadius:3, boxShadow: "1px 1px 10px rgba(0,0,0,0.25)", backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
    <CardContent>
      <Box >
      <TextField
          id="standard-multiline-flexible"
          placeholder={`Are you looking for a team ${currentUser.name}? Give us some info about you!`}
          multiline
          maxRows={4}
          variant="standard"
          fullWidth
        />
      </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <input type="file" id="file" style={{display:"none"}} />
        <label htmlFor="file">
            <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" alt="" style={{ marginRight: '10px', width:'30px'}} />
            <span>Add Image</span>
            </div>
        </label>
        <Button variant="contained" style={{ marginLeft: 'auto' }}>Send</Button>
    </Box>


    </CardContent>
  </Card>
  )
}

export default Typepost