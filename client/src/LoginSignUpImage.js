import React from 'react';
import {
    Grid,
    Box
  } from '@material-ui/core';
  import { makeStyles } from '@material-ui/styles';
  import bgImg from './assets/bg-img.png';
  import  {ReactComponent as Bubble} from './assets/bubble.svg';

function LoginSignUpImage() {
  const useStyles = makeStyles((theme)=>({
      backgroundImgContainer:{
          backgroundImage: `url(${bgImg})`,
          backgroundSize:"cover",
          backgroundBlendMode: "multiply",
          padding:'0px',
          color: 'white',
          textAlign:'center',
              [theme.breakpoints.down('md')]: {
                  width:'0% '
              },
      },
      boxOfImgContainer:{
          backgroundImage: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
          opacity: '0.85',
          paddingRight:'0',
          width:'100%',
          background:"rgba(57, 145, 247, 0.6)",
          fontSize:"2.3rem",
              [theme.breakpoints.down('md')]: {
                  fontSize:"2rem",
                  width:'100%'
              },
      },
      bubbleImg:{
          marginTop:'48%'
      },
        headingInImage:{
          display:'block',
          paddingLeft:'25%',
          paddingRight:'20%',
          marginTop:'5%',
          fontSize:'26px',
          width:'50%'
        },
  }))

  const classes = useStyles();

  return (
    <Grid container item lg={5} md={5} sm={6} className={classes.backgroundImgContainer} justifyContent='center'>
      <Grid className={classes.boxOfImgContainer} justify='center'>
          <Bubble className={classes.bubbleImg} />
          <Box className={classes.headingInImage}>Converse with anyone with any language</Box>
      </Grid>
    </Grid>
  )
}

export default LoginSignUpImage