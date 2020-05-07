import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Home = () =>{ 
  
  return (
    <div className="">
      <Grid container spacing={3} >
        <br />
        <br />
      <Grid item xs={12} sm={12} style={{minWidth:300, textAlign: "justify", padding: "10px 25px 10px 12px"}}>
        <p>Web journal is a collection of links to various online resources for web developers. An item comprises of a resource's topic, author, URL amongst others. Self-teaching developers like me can find this journal useful since it's a collection of sources to the original web posts. Click on <Link to={"/customers"}>Articles</Link> to explore this collection of resources.</p>
        <br />
        <p>
          Don't forget to drop your comments and observations(in the comment section on how I can improve on the site.
        </p>
        <br />
        <p>
          Happy Coding!! &nbsp; Happy Development!!
          </p>
      </Grid>
      </Grid>
    </div>
  )
  }
export default Home;