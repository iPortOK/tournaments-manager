import { Avatar, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useContext } from 'react'
import {AuthContext} from '../../Auth/AuthContext';
import { TextField } from '@mui/material';

const Comments = () => {

  const {currentUser} = useContext(AuthContext);

    const comments = [
        {
          id: 1,
          desc: 'Looking for a team araise me father ion reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded. ',
          name: 'John',
          userId: 1,
          profilePicurl: 'https://images2.alphacoders.com/104/1048461.jpg',
          img: ""
        },
        {
          id: 2,
          desc: 'Open knowign praise me father an favour. Age. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded. ',
          name: 'Alex',
          userId: 2,
          profilePicurl: 'https://images2.alphacoders.com/104/1048461.jpg',
          img: "https://images2.alphacoders.com/104/1048461.jpg"
        },
      ];

  return (
    <div style={{borderTop: "1px solid #585858"}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Avatar src={currentUser.profilePic} sx={{ width: 45, height: 45, marginBottom:2}}/>
        <TextField  id="outlined-multiline-flexible" multiline maxRows={4} label="Write a comment" variant="outlined" fullWidth sx={{m:2}} />
        <Button sx={{p:2, mb:2}} variant="outlined" >Send</Button>
      </div>

       {comments.map((comment) => (
        <div style={{marginLeft:30, marginRight:30}}>
            <div style={{display:'flex', marginBottom:-18,}}>
                <Avatar src={comment.profilePicurl} sx={{ width: 45, height: 45 }}/>
                <Typography variant="h6" component="h2" sx={{mt:0, ml:2}}>{comment.name}</Typography>
            </div>

            <div style={{ alignItems:'center', marginLeft:60}}>
                <Typography sx={{pr:5}}>{comment.desc}</Typography>
                <Typography sx={{mt:-1.5, color:'grey'}}>1h ago</Typography>
            </div>
        </div>
       ))}
    </div>
  )
}

export default Comments;