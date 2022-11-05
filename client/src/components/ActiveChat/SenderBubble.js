import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  images:{
    height:"100px",
    width:"150px",
    borderRadius:"10px 10px 0 0",
    marginBottom:'0px'
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
    marginTop:'0px'
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    marginTop:'0px'
  },
  multipleImages:{
    height:"60px",
    width:"85px",
    borderRadius:"5px",
    marginRight:'10px'
  }
}));

const SenderBubble = ({ time, text , attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      <Box className={classes.bubble} >
        {attachments ? 
          attachments.map((attachment)=>{
            return (
              <img 
                key={String(attachment)}
                alt="loading img"
                className={attachments.length > 1 ? classes.multipleImages : classes.images}
                src={attachment}
                />  )
          })  :
            <></> 
        }
        
        { text === "" ? 
          <></>  : 
            <Typography className={classes.text}>{text}</Typography>
        }
      </Box>
    </Box>
  );
};

export default SenderBubble;