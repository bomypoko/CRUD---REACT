import  React , { useState , useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import { Grid, TextField, Button } from '@mui/material';

export default function UserCreate() {


  const [ fname , setFname ] = useState('')
  const [ lname , setLname ] = useState('')
  const [ username , setUsername ] = useState('')
  const [ email , setEmail ] = useState('')
  const [ avatar , setAvatar ] = useState('')



  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:2}}>
        <Typography variant="h6" gutterBottom component="div">
                    Create User
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField 
                id="fname" 
                label="First Name" 
                variant="outlined" 
                onChange={(e) => setFname(e.target.value)} fullWidth required />
            </Grid>
            <Grid item xs={12} >
              <TextField 
              id="lname" 
              label="Last Name" 
              variant="outlined"
              onChange={ (e) => setLname(e.target.value)} 
              fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              id="username"
              label="Username" 
              variant="outlined" 
              onChange={(e)=> setUsername(e.target.value) }
              fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              id="password" 
              label="Password" 
              variant="outlined"
              onChange={(e) => setEmail(e.target.value) } 
              fullWidth required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              id="email" 
              label="Email" 
              variant="outlined"
              onChange={(e) => setEmail(e.target.value) } 
              fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField 
              id="avatar" 
              label="Avatar" 
              variant="outlined"
              onChange={(e) => setAvatar(e.target.value)} 
              fullWidth required />
            </Grid>
            <Grid item xs={12}>

              <Button variant="contained" fullWidth color="primary">
                Create
              </Button>
              
        
            </Grid>
         
          </Grid>
        </form>
        
      </Container>
    </React.Fragment>
  );
}