import React from 'react';
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Grid, Typography} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InfoIcon from '@material-ui/icons/Info';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import PolicyIcon from '@material-ui/icons/Policy';

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
        <Grid container spacing={3} className={classes.barback} position="static" padding ="1px" >
            <Grid item xs={12} sm={8} style={{textAlign:"left", paddingLeft: "14px"}}>
                <Typography>
                    <p>
                       <b>&lt;Dev /&gt; Journal</b> is a project of <b>McCollins Technologies.</b>
                       <p><b>Disclaimer: </b>
                        All articles are referenced with source and author.
                        </p>
                    </p>
                        
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} style={{paddingTop:"2px", textAlign:"left"}}>
                <Typography >
                    <p>
                        <b>Contact us:</b>
                        <br/>
                            <LocationOnIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/> McCollins Technologies
                        <br/>
                            <EmailIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/> mccollinstechnologies@gmail.com.
                        <br/>
                            Follow us on: <a href="https://twitter.com/engrcollins14" target="_blank">
                            <TwitterIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/>Twitter,</a> &nbsp;
                            <a href="https://facebook.com/engrcollins14" target="_blank"><FacebookIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/>Facebook, </a> &nbsp;
                            <a href="https://qr.ae/TmZyQH" target="_blank">Quora, </a> &nbsp;
                            <a href="https://medium.com" target="_blank">Medium.</a>
                    </p> 
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} style={{padding:"1px", marginTop:"-15px", textAlign:"center"}} >
                <Typography>
                    <p>
                        <a href="#"> <InfoIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/>About Us</a> &nbsp;|&nbsp; <a href="#"> <PolicyIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/>Privacy Policy</a> &nbsp;|&nbsp; <a href="#"><LiveHelpIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/>FAQ</a> &nbsp;|&nbsp; <a href="#"><FeaturedVideoIcon style={{ display: "inline-block", marginBottom:"-5px", fontSize:"20px" }}/>Advertise</a>
                    </p>
                    <p id="copyright"><b>McCollins Technologies &copy; 2019 - <span className="copyright"></span></b></p>
                </Typography>
            </Grid>
        </Grid>

      </div>
      );
    }

export default Footer
