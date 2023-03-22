import { Box, Button, Card, CardContent, Container, Link, TextField, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Comments from "./comments";
import React from "react";

const Post = ({ post }) => { 

  const [commentOpen, setCommentOpen] = React.useState(false);

  const liked = false;

  return (

    <Card sx={{m:2, pl:1.5, pr:1.5, pt:1, borderRadius:3, boxShadow: "1px 1px 10px rgba(0,0,0,0.25)", backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <CardContent>
        <Box sx={{display:'flex',}}>
        <img src={post.profilePicurl} alt="" style={{borderRadius:'50%',height:60, width:60 }}/>
        <div style={{marginLeft:15}}>
        <Typography variant="h6" component="h2" >
          {post.name}
        </Typography>
        <Typography color="textSecondary">
          1 min ago
        </Typography>
        </div>
        <div style={{marginLeft: 'auto'}}>
         <MoreHorizIcon sx={{ mt:1}}/>
        </div>
        </Box>

        <Box sx={{mt:1 }}>
        <Typography variant="body2" component="p" sx={{fontSize:17}}>{post.desc}</Typography>
        <img src={post.img} alt="" style={{width:'100%', marginTop:10, borderRadius:'15px'}}/>
        </Box>
        
        <Box sx={{display:'flex', alignItems:'center', mb:-2}}>
        <div style={{display:'flex'}}>
        {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
        <Typography sx={{ml:1, mr:3}}>10 Likes</Typography>
        </div>
        <div style={{display:'flex'}} onClick={()=>setCommentOpen(!commentOpen)}>
        <MessageIcon/>
        <Typography sx={{ml:1}}  >10 Comments</Typography>
        </div>
        </Box>
      </CardContent>
      {commentOpen && <Comments/>}
    </Card>


  )
}

export default Post;