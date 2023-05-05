import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:2}}>
        <Typography variant="h6" gutterBottom component="div">
                    Create User
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              hello
            </Grid>
            <Grid item xs={12} sm={6}>
              hello
            </Grid>
          </Grid>
        </form>
        
      </Container>
    </React.Fragment>
  );
}