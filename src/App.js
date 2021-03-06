import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Header from './Header';
import Side from './SideNav.js';
import "./App.css";
import Home from "./Home";
import AddCustomer from "./components/AddCustomer";
import Customer from "./components/Customer";
import CustomersList from "./components/CustomersList";
import Footer from "./Footer.js";

function App() {

  return (
      <div id="appContainer" >
      <Header />
            <Router>
              <Grid container spacing={3} >
              <Grid item xs={12} sm={3} lg={2}>
                <Side />
              </Grid>
                <br/>
                <br/>
                <Grid item xs={8} sm={9} lg={10}>
                <div className="appContent" style={{textAlign: "center"}}>
                <Switch>
                    <Route path="/add" component={AddCustomer} />
                    <Route path="/customers/:id" component={Customer} />
                    <Route path="/customers" component={CustomersList} />
                    <Route path="/" component={Home} />
                  </Switch>
              </div>
              </Grid>
              </Grid>
          </Router>
          <div>
            <Footer />
          </div>
          </div>
  );
}

export default App;
