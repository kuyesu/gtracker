import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Login from '../../component/auth/Login';
import SignUp from '../../component/auth/SignUp';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function AuthPage() {
  return (
    <Container sx={{ margin: 5, marginBottom: 5, marginTop:8 }}>
      <div className="row">
        <div className="col-md-6">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Item
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ paddingBottom: 2 }}>
                    <Avatar alt="Cindy Baker" src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" sx={{ width: 100, height: 100 }} />
                  </Stack>
                  <Typography gutterBottom variant="p" component="div" sx={{ paddingBottom: 1, fontWeight: 600 }}>
                    Kuyeso Rogers
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 100 }}>
                    Software Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 100, fontSize: 11 }}>
                    2019bce028@std.must.ac.ug
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>



        <div className="col-md-6">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Item
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Login />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>


      </div>
    </Container>
  )
}

export default AuthPage