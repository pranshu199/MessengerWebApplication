import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { makeStyles, InputAdornment } from '@material-ui/core';
import { Link } from '@material-ui/core';
import LoginSignUpImage from './LoginSignUpImage';
import NavBar from './NavBar';

const useStyles = makeStyles((theme)=>({
  root:{
    height:'100vh',
    width:'100%',
  },
  navBar:{
    width:'100%'
  },
  loginContainer:{
      marginLeft:"10%",
    marginBottom:"25%",
    marginTop: "17%"
  },
  loginForm:{
    marginBottom: "5%",
    paddingTop:"6%",
    marginRight: "40%",
  },
  loginFormHeading:{
    fontSize:'26px',
    fontWeight:'600'
  },
  textFieldOfEmail:{
    marginBottom:"8%",
    "& .MuiFormLabel-root": {
        color: "#d4d4d4"
     },
  },
  loginBtn:{
    borderRadius:'3px',
    textTransform: 'none',
    marginTop: '10%',
    padding: '12px 45px',
    backgroundColor: '#3b8dfb',
    color:'white'
  },
}));

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
     <LoginSignUpImage />
    <Grid container item  lg={6} md={7} sm={6} xs={12} >
      <Box className={classes.navBar} >
        <NavBar typography="Don't have an account?" link="Register"/>
      </Box>
        <form onSubmit={handleLogin}>
          <Grid container className={classes.loginContainer} >
              <Typography variant="h4" className={classes.loginFormHeading} >Welcome back!</Typography>
            <Grid container item className={classes.loginForm}>
              <FormControl fullWidth required>
                <TextField
                  className={classes.textFieldOfEmail}
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
              <FormControl fullWidth required >
              <TextField
                InputProps={{
                  endAdornment: <InputAdornment position="end" ><Link underline="none"  href="/">Forgot?</Link></InputAdornment>,
                        }}
                classes = {classes.textFieldOfPassword}
                label="Password"
                aria-label="password"
                type="password"
                name="password"
                InputLabelProps={{
                  style: { color: '#d4d4d4'},
                }}
              />
              </FormControl>
              <Grid container item justifyContent="center">
                  <Button className={classes.loginBtn} type="submit" variant="contained" size="large" >
                  Login
                  </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
