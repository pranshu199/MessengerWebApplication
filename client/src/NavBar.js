import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Grid, Button, Typography } from '@material-ui/core';

function NavBar({typography, link}) {

    const useStyles = makeStyles((theme)=>({
        navBarContainer:{
            marginTop:'8%',
            marginLeft:'35%',
            display:'block'

        },
        link:{
            textDecoration: 'none'
        },
        navBarRegisterBtn:{
            backgroundColor:"White",
            textTransform: 'none',
            color:'#3b8dfb',
            width:'140px',
            height:'54px',
            display:'inline-block'
            },
        navBarText:{
            color: '#c8c8c8',
            marginRight:'5%',
            display:'inline-block',
        },
    }))
    
    const classes = useStyles();

  return (
    <Grid className={classes.navBarContainer}>
        <Typography className={classes.navBarText}>{typography}</Typography>
        <Link href={link} className={classes.link}>
            <Button variant="contained" className={classes.navBarRegisterBtn} size="large" >{link}</Button>
        </Link>
    </Grid>

  )
}

export default NavBar