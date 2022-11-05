import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  multipleImages:{
    height:"60px",
    width:"85px",
    borderRadius:"5px",
    marginRight:'10px'
  },
  images:{
    height:"100px",
    width:"150px",
    borderRadius:"10px 10px 0 0",
    marginBottom:'0px'
  }
});


function Bubble({attachments}) {
  const classes = useStyles();

  return (
    <Box>
      {attachments ? 
        attachments.map((attachment)=>{
          return (
            <img 
              key={String(attachment)}
              alt="loading img"
              className={attachments.length > 1 ? classes.multipleImages : classes.images}
              src={attachment}
            />  
          )
        })  
      :
        <></> 
      } 
    </Box>
  )
}

export default Bubble 