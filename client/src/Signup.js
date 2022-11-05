import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LoginSignUpImage from './LoginSignUpImage';
import NavBar from './NavBar';

const useStyles = makeStyles((theme)=>({
  root:{
    height:'100vh',
    width:'100%',
    overflow:'hidden',
    },
  navBar:{
    width:'100%',
    },
  registerFormContainer:{
    marginLeft:"10%",
    marginBottom:"25%",
    marginTop: "19%",
    [theme.breakpoints.down('sm')]: {
          marginLeft:'0',
          float:'right',
          width:'70%',
          marginBottom:'10%'
      },
  },
  registerFormItem:{
    marginBottom: "5%",
    paddingTop:"6%",
    marginRight: "40%",
    width:'70%'
  },
  registerFormHeading:{
    fontSize:'26px',
    fontWeight:'600'
  },
  textFieldofUsername:{
    marginTop:'10px',
    marginBottom:"30px",
    "& .MuiFormLabel-root": {
        color: "#d4d4d4"
     },
  },
  textFieldOfEmail:{
    marginBottom:'30px',
    "& .MuiFormLabel-root": {
        color: "#d4d4d4"
     },
  },
  textFieldOfConfirmPassword:{
    marginTop:'25px'
  },
  registerBtn:{
    height:'56px',
    width:'160px',
    borderRadius:'5px',
    textTransform: 'none',
    marginTop: '25px',
    padding: '10px 60px',
    backgroundColor: '#3b8dfb',
    color:'white',
    fontWeight: '700',
    fontSize: '16px'
  },

}));

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  const classes = useStyles();

  return (
  <Grid container  className={classes.root}>
    <LoginSignUpImage />
    <Grid container item  lg={6} md={7} sm={6} xs={12} >
      <Box className={classes.navBar}>
        <NavBar typography="Already have an account?" link="Login"/>
      </Box>
      <form onSubmit={handleRegister}>
        <Grid className={classes.registerFormContainer}>
            <Typography variant="h4" className={classes.registerFormHeading}>Create an account.</Typography>
          <Grid container item className={classes.registerFormItem}>
              <FormControl fullWidth required>
                <TextField
                  className={classes.textFieldofUsername}
                  aria-label="username"
                  label="Username"
                  name="username"
                  type="text"
                />
              </FormControl>
              <FormControl fullWidth required>
                <TextField
                  className={classes.textFieldOfEmail}
                  label="E-mail address"
                  aria-label="e-mail address"
                  type="email"
                  name="email"
                />
              </FormControl>
              <FormControl fullWidth required error={!!formErrorMessage.confirmPassword} >
                <TextField
                  className = {classes.textFieldOfPassword}
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  InputLabelProps={{
                    style: {color: '#d4d4d4'},
                  }}
                  name="password"
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
              <FormControl fullWidth required error={!!formErrorMessage.confirmPassword}>
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  InputLabelProps={{
                    style: { color: '#d4d4d4'},
                  }}
                  name="confirmPassword"
                  className={classes.textFieldOfConfirmPassword}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            <Grid container item justifyContent="center">
              <Button className={classes.registerBtn} type="submit" variant="contained" size="large">
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </Grid>
  );
};

export default Signup;
