import React from 'react';
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

/*var currentTime = new Date()
var year = currentTime.getFullYear()
document.write(year)*/

const Footer = () => {

    const useStyles = makeStyles((theme) => ({
      iconise: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },

      righted:{
        position: 'absolute',
        right: 0,
      },

      barback: {
         backgroundColor: '#b3cce6',
         color: "black",
        },
    }));

    const classes = useStyles();
    return(
      <div id= "footer">
        <Grid container spacing={3} className={classes.barback} position="static" padding ="4px" >
            <Grid item xs={12} sm={4} style={{textAlign:"left", paddingLeft: "14px"}}>
                <Typography>
                    <p><b>Contact us:</b>
                        <br />
                            Dev Journal
                        <br />
                            Mail: mccollinstechnologies@gmail.com.
                        <p>Follow us on: <a href="https://twitter.com/engrcollins14" target="_blank">
                            Twitter</a>, &nbsp;
                            <a href="https://facebook.com/engrcollins14" target="_blank">Facebook </a>, &nbsp;
                            <a href="https://qr.ae/TmZyQH" target="_blank">Quora </a>, &nbsp;
                            <a href="https://medium.com" target="_blank">Medium.</a></p>
                        </p>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={5} style={{padding:"3px", paddingTop:"65px", textAlign:"center"}} >
                <Typography>
                    <p> <a href="#">About Us</a> |  <a href="#">Terms of Service</a> |  <a href="#">Privacy Policy</a> |  <a href="#">FAQ</a> |  <a href="#">Advertise</a> </p>
                    <p id="copyright"><b>Dev Journal &copy; 2019 - <span className="copyright"></span></b></p>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={3} style={{paddingTop:"25px", textAlign:"center"}}>
                <Typography >
                    <p><b>Disclaimer: </b>
                        All articles are referenced with source and author.
                    </p>
                </Typography>
            </Grid>
        </Grid>
      </div>
      );
    }

export default Footer
