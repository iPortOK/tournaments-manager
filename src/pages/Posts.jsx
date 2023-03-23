import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/material';
import theme from '../components/theme';
import Post from '../components/posts/Post';

const Posts = () => {

    const posts = [
        {
          id: 1,
          desc: 'Looking for a team and Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded. ',
          name: 'John',
          userId: 1,
          profilePicurl: 'https://images2.alphacoders.com/104/1048461.jpg',
          img: ""
        },
        {
          id: 2,
          desc: 'Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded. ',
          name: 'Alex',
          userId: 2,
          profilePicurl: 'https://images2.alphacoders.com/104/1048461.jpg',
          img: "https://images2.alphacoders.com/104/1048461.jpg"
        },
      ];

  return (

<ThemeProvider theme={theme}>
  <div
    style={{
      position: "relative",
      minHeight: '100vh', 
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(rgba(240, 138, 18, 0.4), rgba(0, 0, 0, 0.9)), url(https://mobimg.b-cdn.net/v3/fetch/d8/d825007dc211613c1cdab8e32568881d.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.2,
        zIndex:'-1',
      }}
    ></div>
    
    <Container maxWidth="md">
    <div>
        {posts.map((post) => (
            <Post post={post} key={post.id} />
        ))}
    </div>
    </Container>

  </div>
</ThemeProvider>

  )
}

export default Posts;