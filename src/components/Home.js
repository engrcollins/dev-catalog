import React, { useState, useEffect } from "react";
import './CustomersList.css'
import CustomerDataService from "../services/CustomerService";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const Home = () =>{ 
  
  return (
    <div className="">
      <Grid container spacing={3} >
      <Grid item xs={12} sm={10} className="appContent">
        <p>Web journal is a collection of links to various online resources</p>
      </Grid>
      <Grid item xs={12} sm={2}>
        <p> .</p>
      </Grid>
      </Grid>
    </div>
  )
  }
export default Home;